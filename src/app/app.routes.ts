import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { CreatePasswordComponent } from './authentication/create-password/create-password.component';
import { AuthGuard } from './authentication/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './dashboard/main-content/projects/projects.component';
import { RecomendationsComponent } from './dashboard/main-content/recomendations/recomendations.component';
import { FrequentQuestionsComponent } from './dashboard/main-content/frequent-questions/frequent-questions.component';
import { UsersComponent } from './dashboard/main-content/users/users.component';
import { TermsConditionsComponent } from './dashboard/main-content/terms-conditions/terms-conditions.component';
import { PolociesPrivacyComponent } from './dashboard/main-content/polocies-privacy/polocies-privacy.component';
import { LegalAnnouncementsComponent } from './dashboard/main-content/legal-announcements/legal-announcements.component';
import { EmailCodeRecoverComponent } from './authentication/email-code-recover/email-code-recover.component';
import { RecoveryGuard } from './authentication/auth-recovery.guard';

export const routes: Routes = [
    {
        'path': 'dashboard',
        'title': 'Dashboard',
        component: DashboardComponent,
        children:[
            {path: '', redirectTo: 'projects', pathMatch: 'full'},
            {path: 'projects', component: ProjectsComponent},
            {path: 'recommendations', component: RecomendationsComponent},
            {path: 'frequent-questions', component: FrequentQuestionsComponent},
            // {path: 'terms-conditions', component: TermsConditionsComponent},
            {path: 'polocies-privacy', component: PolociesPrivacyComponent},
            {path: 'legal-announcement', component: LegalAnnouncementsComponent},
            {path: 'users', component: UsersComponent},
        ],
        canActivate: [AuthGuard]
    },
    {
        'path': 'authenticate',
        'title': 'Autenticación',
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
            {path: 'code', component: EmailCodeRecoverComponent},
            {path: 'create-password', component: CreatePasswordComponent, canActivate: [RecoveryGuard]},
        ]
    },
    {'path': '', redirectTo: 'dashboard', pathMatch: 'full'},
    {'path': '**', component: NotFoundComponent},
];
