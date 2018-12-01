import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ContactsDetailComponent } from "./contacts-detail/contacts-detail.component";
import { ContactsEditorComponent } from "./contacts-editor/contacts-editor.component";
import { ContactsDetailViewComponent } from "./contacts-detail-view/contacts-detail-view.component";
import { ContactsDashboardComponent } from "./contacts-dashboard/contacts-dashboard.component";
import { ContactsResolver } from "./shared/contacts.resolver";

export const APP_ROUTES = [
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '', component: ContactsDashboardComponent, children: [
        { path: 'contact/:id', component: ContactsDetailViewComponent, resolve: {contact: ContactsResolver}},
        { path: 'contact/:id/edit', component: ContactsEditorComponent, canDeactivate: ['ConfirmNavigationGuard'], resolve: {contact: ContactsResolver} },
        { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
    ] }
]