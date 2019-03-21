import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { AboutComponent } from './page/about';
import { CreateComponent } from './page/crud/create/create.component';
import { UpdateComponent } from './page/crud/update/update.component';
import { ReadComponent } from './page/crud/read/read.component';
import { ViewComponent } from './page/crud/view/view.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'view', component: ViewComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
    { path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuard] },
    { path: 'view/:id', component: ReadComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);