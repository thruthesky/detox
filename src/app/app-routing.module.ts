import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
  { path: 'alarm-list', loadChildren: () => import('./pages/alarm-list/alarm-list.module').then(m => m.AlarmListPageModule) },
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsPageModule) },
  { path: 'post-list', loadChildren: () => import('./pages/forum/post-list/post-list.module').then(m => m.PostListPageModule) },
  { path: 'post-list/:slug', loadChildren: () => import('./pages/forum/post-list/post-list.module').then(m => m.PostListPageModule) },
  { path: 'post-create', loadChildren: () => import('./pages/forum/post-create/post-create.module').then(m => m.PostCreatePageModule) },
  { path: 'post-view', loadChildren: () => import('./pages/forum/post-view/post-view.module').then(m => m.PostViewPageModule) },
  { path: 'about-detoxification', loadChildren: () => import('./pages/about-detoxification/about-detoxification.module').then(m => m.AboutDetoxificationPageModule) },
  { path: 'how-to-detox-my-body', loadChildren: () => import('./pages/how-to-detox-my-body/how-to-detox-my-body.module').then(m => m.HowToDetoxMyBodyPageModule) },
  { path: 'measure-detox', loadChildren: () => import('./pages/measure-detox/measure-detox.module').then(m => m.MeasureDetoxPageModule) },
  { path: 'detoxification-diary', loadChildren: () => import('./pages/detoxification-diary/detoxification-diary.module').then(m => m.DetoxificationDiaryPageModule) },
  { path: 'detoxification-recipe', loadChildren: () => import('./pages/detoxification-recipe/detoxification-recipe.module').then(m => m.DetoxificationRecipePageModule) },
  { path: 'home-training', loadChildren: () => import('./pages/home-training/home-training.module').then(m => m.HomeTrainingPageModule) },
  { path: 'company-info', loadChildren: () => import('./pages/company-info/company-info.module').then(m => m.CompanyInfoPageModule) },
  { path: 'customer-service', loadChildren: () => import('./pages/customer-service/customer-service.module').then(m => m.CustomerServicePageModule) },
  { path: 'terms-and-conditions', loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsPageModule) },
  { path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule) },
  { path: 'child-protection', loadChildren: () => import('./pages/child-protection/child-protection.module').then(m => m.ChildProtectionPageModule) },
  { path: 'affiliate', loadChildren: () => import('./pages/affiliate/affiliate.module').then(m => m.AffiliatePageModule) },
  { path: 'testimonial', loadChildren: () => import('./pages/testimonial/testimonial.module').then(m => m.TestimonialPageModule) },
  { path: 'detoxification-tip', loadChildren: () => import('./pages/detoxification-tip/detoxification-tip.module').then(m => m.DetoxificationTipPageModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'detoxification-recipe-item', loadChildren: () => import('./pages/detoxification-recipe-item/detoxification-recipe-item.module').then(m => m.DetoxificationRecipeItemPageModule) },
  { path: 'detoxification-tip-detail', loadChildren: () => import('./pages/detoxification-tip-detail/detoxification-tip-detail.module').then(m => m.DetoxificationTipDetailPageModule) },
  { path: 'home-training-item', loadChildren: () => import('./pages/home-training-item/home-training-item.module').then(m => m.HomeTrainingItemPageModule) },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule' },
  { path: '**', loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundPageModule) },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
