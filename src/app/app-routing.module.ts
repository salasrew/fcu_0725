import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{
path: '',
redirectTo: 'signin',
pathMatch: 'full'
},
{
path: 'signin',
loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
},
{
path: 'home',
loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
];
@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule { }
