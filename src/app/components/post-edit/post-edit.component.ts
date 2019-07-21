import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post, PostGetOptions, PostCreateOptions, PostUpdateOptions, Files, UploadedFile } from 'modules/wordpress-api/services/wordpress-api.interface';
import { PopoverController } from '@ionic/angular';
import { FileUploadPopoverComponent } from '../file-upload-popover/file-upload-popover.component';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit {

  /**
   * If `ID` is set, then it is going to update the post.
   */
  @Input() ID: string;

  /**
   * If `guid` is set, then it is going to create or update a post with that `guid`.
   * When `guid` is set, `ID` is ignored.
   */
  @Input() guid: string;

  /**
   * If `post` is set, then it is going to update that `post` without loading post data from server.
   * If `post` is set, then `ID` and `guid` is ignored.
   */
  @Input() post: Post;


  /**
   * Events for create, update.
   * `edited` is for any of create & updated.
   */
  @Output() created = new EventEmitter<Post>();
  @Output() updated = new EventEmitter<Post>();
  @Output() edited = new EventEmitter<Post>();

  /**
   * files of uploaded image.
   * @note these images will be shown on the template view.
   * @note uploaded images and downloaded images must be saved here. And it must be copied into submit data.
   */
  files: Files = [];

  form: FormGroup;

  submitted = false;
  /**
   * Constructor
   * @param a AppService
   * @param fb FormBuilder
   */
  constructor(
    public a: AppService,
    public fb: FormBuilder,
    private popoverController: PopoverController

  ) {

    this.form = fb.group({
      post_title: ['', Validators.required],
      post_content: ['', Validators.required]
    });

  }

  ngOnInit() {
    if (this.post) {
      this.updateForm();
    } else if (this.guid) {
      this.loadPostAndUpdateForm({ guid: this.guid });
    } else if (this.ID) {
      this.loadPostAndUpdateForm({ ID: this.ID });
    } else {
      // if `ID`, `guid`, `post` is not provided, then it is going to create.
      // this.a.error({ errcode: '-1', errstring: 'No post ID, guid, data passed' });
    }
  }

  loadPostAndUpdateForm(req: PostGetOptions) {
    req.autop = false;
    this.a.wp.postGet(req).subscribe(post => {
      console.log('loadPostAndUpdateForm', post);
      this.updateForm(post);
    }, e => {
      if (e && e.errcode && e.errcode === -600) {
        // no post that guid? then, ignore. it will create.
      } else {
        this.a.error(e);
      }
    });
  }

  updateForm(post?: Post) {
    if (post) {
      this.post = post;
    }

    /**
     * Error handling.
     * Just in case? or is this really happening?
     * It's more likely 'jsut in case'
     */
    if ( ! this.post || ! this.post.ID ) {
      return;
    }

    this.form.patchValue({
      post_title: this.post.post_title,
      post_content: this.post.post_content
    });

    this.files = post.files;
  }


  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }




    const req: PostCreateOptions = {
      post_title: this.form.get('post_title').value,
      post_content: this.form.get('post_content').value
    };

    console.log('onSubmit');

    /**
     * Create
     */
    if (!this.post) {
      if (this.guid) {
        req.guid = this.guid;
      }
      req.files = this.getFileIDs();
      console.log('create req: ', req);
      this.a.wp.postCreate(req).subscribe(post => {
        console.log('a post has been created: ', post);
        this.created.emit(post);
        this.edited.emit(post);
      }, e => this.a.error(e));
    } else {
      /**
       * Update
       */
      const up: PostUpdateOptions = req as any;
      up.ID = this.post.ID;
      up.files = this.getFileIDs();
      console.log('update req: ', req);
      this.a.wp.postUpdate(up).subscribe(post => {
        console.log('post updated: ', post);
        this.updated.emit(post);
        this.edited.emit(post);
      }, e => this.a.error(e));
    }


  }

  getFileIDs(): Array<string> {
    const IDs = [];
    for (const file of this.files) {
      IDs.push(file.ID);
    }
    return IDs;
  }

  errors(formName: string): any {
    return this.form.get(formName).errors;
  }

  async onClickUploadImage(ev: any) {
    const popover = await this.popoverController.create({
      component: FileUploadPopoverComponent,
      event: ev,
      translucent: true,
      // cssClass: 'popover-center ',
    });
    popover.present();
    const re = await popover.onWillDismiss();
    console.log('file upload: ', re);
    if (re && re.data && re.data.ID) {
      this.files.push(re.data);
    }

    // this.profilePhotoUrl = re.data.url;
    // this.a.wp.profileUpdate({ photoURL: re.data.url }).subscribe(res => {
    //   console.log('profile photo url update', res);
    // }, e => this.a.error(e));
  }



}
