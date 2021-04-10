import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './Apps/calendar/calendar.component';
import { CompaniesComponent } from './Apps/companies/companies.component';
import { ContactsComponent } from './Apps/contacts/contacts.component';
import { KanbanBoardComponent } from './Apps/kanban-board/kanban-board.component';
import { ProjectsComponent } from './Apps/projects/projects.component';
import { TicketsComponent } from './Apps/tickets/tickets.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { CategoryListComponent } from './Category/category-list/category-list.component';
import { CrmContactsComponent } from './CRM/crm-contacts/crm-contacts.component';
import { CustomersComponent } from './CRM/customers/customers.component';
import { DashboardComponent } from './CRM/dashboard/dashboard.component';
import { LeadsComponent } from './CRM/leads/leads.component';
import { OpportunitiesComponent } from './CRM/opportunities/opportunities.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboards/dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboards/dashboard3/dashboard3.component';
import { Dashboard4Component } from './dashboards/dashboard4/dashboard4.component';
import { EcommerceDashboardComponent } from './eCommerce/ecommerce-dashboard/ecommerce-dashboard.component';
import { OrdersComponent } from './eCommerce/orders/orders.component';
import { ProductDetailsComponent } from './eCommerce/product-details/product-details.component';
import { ProductEditComponent } from './eCommerce/product-edit/product-edit.component';
import { ProductsComponent } from './eCommerce/products/products.component';
import { SellersComponent } from './eCommerce/sellers/sellers.component';
import { ComposeEmailComponent } from './Email/compose-email/compose-email.component';
import { EmailTemplateComponent } from './Email/email-template/email-template.component';
import { InboxComponent } from './Email/inbox/inbox.component';
import { ReadEmailComponent } from './Email/read-email/read-email.component';
import { ComingSoonComponent } from './Extra-pages/coming-soon/coming-soon.component';
import { FAQsComponent } from './Extra-pages/faqs/faqs.component';
import { GalleryComponent } from './Extra-pages/gallery/gallery.component';
import { InvoiceComponent } from './Extra-pages/invoice/invoice.component';
import { MaintenanceComponent } from './Extra-pages/maintenance/maintenance.component';
import { PricingComponent } from './Extra-pages/pricing/pricing.component';
import { ProfileComponent } from './Extra-pages/profile/profile.component';
import { SearchResultsComponent } from './Extra-pages/search-results/search-results.component';
import { SitemapComponent } from './Extra-pages/sitemap/sitemap.component';
import { TimelineComponent } from './Extra-pages/timeline/timeline.component';
import { AdvancedComponent } from './Forms/advanced/advanced.component';
import { FilesUploadsComponent } from './Forms/files-uploads/files-uploads.component';
import { GeneralElementsComponent } from './Forms/general-elements/general-elements.component';
import { ImageCropComponent } from './Forms/image-crop/image-crop.component';
import { MasksComponent } from './Forms/masks/masks.component';
import { PickersComponent } from './Forms/pickers/pickers.component';
import { QuilljsEditorComponent } from './Forms/quilljs-editor/quilljs-editor.component';
import { SummernoteComponent } from './Forms/summernote/summernote.component';
import { ValidationComponent } from './Forms/validation/validation.component';
import { WizardComponent } from './Forms/wizard/wizard.component';
import { XEditableComponent } from './Forms/x-editable/x-editable.component';
import { DripiconsComponent } from './Icons/dripicons/dripicons.component';
import { FeatherIconsComponent } from './Icons/feather-icons/feather-icons.component';
import { FontAwesomeComponent } from './Icons/font-awesome/font-awesome.component';
import { MaterialDesignIconsComponent } from './Icons/material-design-icons/material-design-icons.component';
import { SimpleLineComponent } from './Icons/simple-line/simple-line.component';
import { ThemifyComponent } from './Icons/themify/themify.component';
import { WeatherComponent } from './Icons/weather/weather.component';
import { OrderListComponent } from './Order/order-list/order-list.component';
import { ConfirmMailComponent } from './Pages/confirm-mail/confirm-mail.component';
import { ErrorAltComponent } from './Pages/error-alt/error-alt.component';
import { ErrorInternalComponent } from './Pages/error-internal/error-internal.component';
import { ErrorNotfoundComponent } from './Pages/error-notfound/error-notfound.component';
import { LockScreenComponent } from './Pages/lock-screen/lock-screen.component';
import { LoginComponent } from './Pages/login/login.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { RecoverPasswordComponent } from './Pages/recover-password/recover-password.component';
import { RegisterComponent } from './Pages/register/register.component';
import { SigninSignupComponent } from './Pages/signin-signup/signin-signup.component';
import { StarterComponent } from './Pages/starter/starter.component';
import { SettingComponent } from './setting/setting.component';
import { BasicTablesComponent } from './Tables/basic-tables/basic-tables.component';
import { BootstrapTablesComponent } from './Tables/bootstrap-tables/bootstrap-tables.component';
import { DataTablesComponent } from './Tables/data-tables/data-tables.component';
import { EditableTablesComponent } from './Tables/editable-tables/editable-tables.component';
import { FooTablesComponent } from './Tables/foo-tables/foo-tables.component';
import { JsgridTablesComponent } from './Tables/jsgrid-tables/jsgrid-tables.component';
import { ResponsiveTablesComponent } from './Tables/responsive-tables/responsive-tables.component';
import { TablesawTablesComponent } from './Tables/tablesaw-tables/tablesaw-tables.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UserListComponent } from './User/user-list/user-list.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard1',
    pathMatch: 'full'
  }  ,
  { path: 'dashboard1', component: Dashboard1Component },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: 'dashboard3', component: Dashboard3Component },
  { path: 'dashboard4', component: Dashboard4Component },

  {path:'user-list',component:UserListComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'category-add',component:AddCategoryComponent},
  {path:'order-list',component:OrderListComponent},


  { path: 'calendar', component: CalendarComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'kanbar-board', component: KanbanBoardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tickets', component: TicketsComponent },

  { path: 'crm-contacts', component: CrmContactsComponent },
  { path: 'crm-customer', component: CustomersComponent },
  { path: 'crm-dashboard', component: DashboardComponent },
  { path: 'crm-leads', component: LeadsComponent },
  { path: 'crm-opportunities', component: OpportunitiesComponent },

  { path: 'ecommerce-dashboard', component: EcommerceDashboardComponent },
  { path: 'ecommerce-orders', component: OrdersComponent },
  { path: 'ecommerce-product-details', component: ProductDetailsComponent },
  { path: 'ecommerce-product-edit', component: ProductEditComponent },
  { path: 'ecommerce-products', component: ProductsComponent },
  { path: 'ecommerce-sellers', component: SellersComponent },

  { path: 'settings', component: SettingComponent },



  { path: 'confirm-mail', component: ConfirmMailComponent },
  { path: 'error-alt', component: ErrorAltComponent },
  { path: 'error-internal', component: ErrorInternalComponent },
  { path: 'error-notfound', component: ErrorNotfoundComponent },
  { path: 'lock-screen', component: LockScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin-signup', component: SigninSignupComponent },
  { path: 'starter', component: StarterComponent },

  { path: 'compose-email', component: ComposeEmailComponent },
  { path: 'email-template', component: EmailTemplateComponent },
  { path: 'email-inbox', component: InboxComponent },
  { path: 'read-email', component: ReadEmailComponent },

  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'maintanance', component: MaintenanceComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'timeline', component: TimelineComponent },

  { path: 'advanced', component: AdvancedComponent },
  { path: 'file-upload', component: FilesUploadsComponent },
  { path: 'general-elements', component: GeneralElementsComponent },
  { path: 'image-crop', component: ImageCropComponent },
  { path: 'masks', component: MasksComponent },
  { path: 'pickers', component: PickersComponent },
  { path: 'quilljs-editor', component: QuilljsEditorComponent },
  { path: 'summer-note', component: SummernoteComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'winzard', component: WizardComponent },
  { path: 'x-editable', component: XEditableComponent },

  { path: 'dripicons', component: DripiconsComponent },
  { path: 'feather-icons', component: FeatherIconsComponent },
  { path: 'font-awesome', component: FontAwesomeComponent },
  { path: 'material-design-icons', component: MaterialDesignIconsComponent },
  { path: 'simple-line', component: SimpleLineComponent },
  { path: 'themify', component: ThemifyComponent },
  { path: 'weather', component: WeatherComponent },

  { path: 'basic-tables', component: BasicTablesComponent },
  { path: 'bootstrap-tables', component: BootstrapTablesComponent },
  { path: 'data-tables', component: DataTablesComponent },
  { path: 'editable-tables', component: EditableTablesComponent },
  { path: 'foo-tables', component: FooTablesComponent },
  { path: 'jsgrid-tables', component: JsgridTablesComponent },
  { path: 'responsive-tables', component: ResponsiveTablesComponent },
  { path: 'tables-saw-tables', component: TablesawTablesComponent },



















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
