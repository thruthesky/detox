import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'alarm-list', loadChildren: './pages/alarm-list/alarm-list.module#AlarmListPageModule' },
  { path: 'products', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'post-list', loadChildren: './pages/forum/post-list/post-list.module#PostListPageModule' },
  { path: 'post-create', loadChildren: './pages/forum/post-create/post-create.module#PostCreatePageModule' },
  { path: 'post-view', loadChildren: './pages/forum/post-view/post-view.module#PostViewPageModule' },
  { path: 'about-detoxification', loadChildren: './pages/about-detoxification/about-detoxification.module#AboutDetoxificationPageModule' },
  { path: 'how-to-detox-my-body', loadChildren: './pages/how-to-detox-my-body/how-to-detox-my-body.module#HowToDetoxMyBodyPageModule' },
  { path: 'measure-detox', loadChildren: './pages/measure-detox/measure-detox.module#MeasureDetoxPageModule' },
  { path: 'detoxification-diary', loadChildren: './pages/detoxification-diary/detoxification-diary.module#DetoxificationDiaryPageModule' },
  { path: 'detoxification-recipe', loadChildren: './pages/detoxification-recipe/detoxification-recipe.module#DetoxificationRecipePageModule' },
  { path: 'home-training', loadChildren: './pages/home-training/home-training.module#HomeTrainingPageModule' },
  { path: 'company-info', loadChildren: './pages/company-info/company-info.module#CompanyInfoPageModule' },
  { path: 'customer-service', loadChildren: './pages/customer-service/customer-service.module#CustomerServicePageModule' },
  { path: 'terms-and-conditions', loadChildren: './pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule' },
  { path: 'privacy-policy', loadChildren: './pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'child-protection', loadChildren: './pages/child-protection/child-protection.module#ChildProtectionPageModule' },
  { path: 'affiliate', loadChildren: './pages/affiliate/affiliate.module#AffiliatePageModule' },
  { path: 'testimonial', loadChildren: './pages/testimonial/testimonial.module#TestimonialPageModule' },
  { path: 'detoxification-tip', loadChildren: './pages/detoxification-tip/detoxification-tip.module#DetoxificationTipPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'detoxification-recipe-item', loadChildren: './pages/detoxification-recipe-item/detoxification-recipe-item.module#DetoxificationRecipeItemPageModule' },  
  { path: '**', loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
