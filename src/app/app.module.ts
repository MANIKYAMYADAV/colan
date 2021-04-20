import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboards/dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboards/dashboard3/dashboard3.component';
import { Dashboard4Component } from './dashboards/dashboard4/dashboard4.component';
import { FooterComponent } from './footer/footer.component';
import { KanbanBoardComponent } from './Apps/kanban-board/kanban-board.component';
import { CalendarComponent } from './Apps/calendar/calendar.component';
import { ContactsComponent } from './Apps/contacts/contacts.component';
import { ProjectsComponent } from './Apps/projects/projects.component';
import { TicketsComponent } from './Apps/tickets/tickets.component';
import { CompaniesComponent } from './Apps/companies/companies.component';
import { DashboardComponent } from './CRM/dashboard/dashboard.component';
import { OpportunitiesComponent } from './CRM/opportunities/opportunities.component';
import { LeadsComponent } from './CRM/leads/leads.component';
import { CustomersComponent } from './CRM/customers/customers.component';
import { CrmContactsComponent } from './CRM/crm-contacts/crm-contacts.component';
import { EcommerceDashboardComponent } from './eCommerce/ecommerce-dashboard/ecommerce-dashboard.component';
import { ProductsComponent } from './eCommerce/products/products.component';
import { ProductDetailsComponent } from './eCommerce/product-details/product-details.component';
import { ProductEditComponent } from './eCommerce/product-edit/product-edit.component';
import { OrdersComponent } from './eCommerce/orders/orders.component';
import { SellersComponent } from './eCommerce/sellers/sellers.component';
import { SettingComponent } from './setting/setting.component';
import { StarterComponent } from './Pages/starter/starter.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { SigninSignupComponent } from './Pages/signin-signup/signin-signup.component';
import { RecoverPasswordComponent } from './Pages/recover-password/recover-password.component';
import { LockScreenComponent } from './Pages/lock-screen/lock-screen.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { ConfirmMailComponent } from './Pages/confirm-mail/confirm-mail.component';
import { ErrorNotfoundComponent } from './Pages/error-notfound/error-notfound.component';
import { ErrorAltComponent } from './Pages/error-alt/error-alt.component';
import { ErrorInternalComponent } from './Pages/error-internal/error-internal.component';
import { InboxComponent } from './Email/inbox/inbox.component';
import { ReadEmailComponent } from './Email/read-email/read-email.component';
import { ComposeEmailComponent } from './Email/compose-email/compose-email.component';
import { EmailTemplateComponent } from './Email/email-template/email-template.component';
import { SidebarUserComponent } from './Layouts/sidebar-user/sidebar-user.component';
import { SmallSidebarComponent } from './Layouts/small-sidebar/small-sidebar.component';
import { DarkSidebarComponent } from './Layouts/dark-sidebar/dark-sidebar.component';
import { LightTopbarComponent } from './Layouts/light-topbar/light-topbar.component';
import { PreloaderComponent } from './Layouts/preloader/preloader.component';
import { SidebarCollapsedComponent } from './Layouts/sidebar-collapsed/sidebar-collapsed.component';
import { BoxedComponent } from './Layouts/boxed/boxed.component';
import { ProfileComponent } from './Extra-pages/profile/profile.component';
import { TimelineComponent } from './Extra-pages/timeline/timeline.component';
import { SitemapComponent } from './Extra-pages/sitemap/sitemap.component';
import { InvoiceComponent } from './Extra-pages/invoice/invoice.component';
import { FAQsComponent } from './Extra-pages/faqs/faqs.component';
import { SearchResultsComponent } from './Extra-pages/search-results/search-results.component';
import { PricingComponent } from './Extra-pages/pricing/pricing.component';
import { MaintenanceComponent } from './Extra-pages/maintenance/maintenance.component';
import { ComingSoonComponent } from './Extra-pages/coming-soon/coming-soon.component';
import { GalleryComponent } from './Extra-pages/gallery/gallery.component';
import { ButtonsComponent } from './UI-Elements/buttons/buttons.component';
import { CardsComponent } from './UI-Elements/cards/cards.component';
import { PortletsComponent } from './UI-Elements/portlets/portlets.component';
import { TabsAccordionsComponent } from './UI-Elements/tabs-accordions/tabs-accordions.component';
import { ModalsComponent } from './UI-Elements/modals/modals.component';
import { ProgressComponent } from './UI-Elements/progress/progress.component';
import { NotificationsComponent } from './UI-Elements/notifications/notifications.component';
import { ImagesComponent } from './UI-Elements/images/images.component';
import { CarouselComponent } from './UI-Elements/carousel/carousel.component';
import { EmbedVideoComponent } from './UI-Elements/embed-video/embed-video.component';
import { DropdownsComponent } from './UI-Elements/dropdowns/dropdowns.component';
import { RibbonsComponent } from './UI-Elements/ribbons/ribbons.component';
import { TooltipPopoverComponent } from './UI-Elements/tooltip-popover/tooltip-popover.component';
import { GeneralUiComponent } from './UI-Elements/general-ui/general-ui.component';
import { TyphographyComponent } from './UI-Elements/typhography/typhography.component';
import { GridComponent } from './UI-Elements/grid/grid.component';
import { WidgetsComponent } from './Admin-UI/widgets/widgets.component';
import { NestableListComponent } from './Admin-UI/nestable-list/nestable-list.component';
import { RangeSliderComponent } from './Admin-UI/range-slider/range-slider.component';
import { AnimationComponent } from './Admin-UI/animation/animation.component';
import { SweetAlertComponent } from './Admin-UI/sweet-alert/sweet-alert.component';
import { TourPageComponent } from './Admin-UI/tour-page/tour-page.component';
import { LoadingButtonsComponent } from './Admin-UI/loading-buttons/loading-buttons.component';
import { FeatherIconsComponent } from './Icons/feather-icons/feather-icons.component';
import { MaterialDesignIconsComponent } from './Icons/material-design-icons/material-design-icons.component';
import { DripiconsComponent } from './Icons/dripicons/dripicons.component';
import { FontAwesomeComponent } from './Icons/font-awesome/font-awesome.component';
import { ThemifyComponent } from './Icons/themify/themify.component';
import { SimpleLineComponent } from './Icons/simple-line/simple-line.component';
import { WeatherComponent } from './Icons/weather/weather.component';
import { GeneralElementsComponent } from './Forms/general-elements/general-elements.component';
import { AdvancedComponent } from './Forms/advanced/advanced.component';
import { ValidationComponent } from './Forms/validation/validation.component';
import { PickersComponent } from './Forms/pickers/pickers.component';
import { WizardComponent } from './Forms/wizard/wizard.component';
import { MasksComponent } from './Forms/masks/masks.component';
import { SummernoteComponent } from './Forms/summernote/summernote.component';
import { QuilljsEditorComponent } from './Forms/quilljs-editor/quilljs-editor.component';
import { FilesUploadsComponent } from './Forms/files-uploads/files-uploads.component';
import { XEditableComponent } from './Forms/x-editable/x-editable.component';
import { ImageCropComponent } from './Forms/image-crop/image-crop.component';
import { BasicTablesComponent } from './Tables/basic-tables/basic-tables.component';
import { DataTablesComponent } from './Tables/data-tables/data-tables.component';
import { EditableTablesComponent } from './Tables/editable-tables/editable-tables.component';
import { ResponsiveTablesComponent } from './Tables/responsive-tables/responsive-tables.component';
import { FooTablesComponent } from './Tables/foo-tables/foo-tables.component';
import { BootstrapTablesComponent } from './Tables/bootstrap-tables/bootstrap-tables.component';
import { TablesawTablesComponent } from './Tables/tablesaw-tables/tablesaw-tables.component';
import { JsgridTablesComponent } from './Tables/jsgrid-tables/jsgrid-tables.component';
import { FlotChartsComponent } from './Charts/flot-charts/flot-charts.component';
import { MorrisChartsComponent } from './Charts/morris-charts/morris-charts.component';
import { ChartjsChartsComponent } from './Charts/chartjs-charts/chartjs-charts.component';
import { PeityChartsComponent } from './Charts/peity-charts/peity-charts.component';
import { ChartistChartsComponent } from './Charts/chartist-charts/chartist-charts.component';
import { C3ChartsComponent } from './Charts/c3-charts/c3-charts.component';
import { SparklinesChartsComponent } from './Charts/sparklines-charts/sparklines-charts.component';
import { JqueryKnobChartsComponent } from './Charts/jquery-knob-charts/jquery-knob-charts.component';
import { RicksawChartsComponent } from './Charts/ricksaw-charts/ricksaw-charts.component';
import { JustgageChartsComponent } from './Charts/justgage-charts/justgage-charts.component';
import { GoogleMapsComponent } from './Maps/google-maps/google-maps.component';
import { VectorMapsComponent } from './Maps/vector-maps/vector-maps.component';
import { MapaelMapsComponent } from './Maps/mapael-maps/mapael-maps.component';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { AddUserComponent } from './User/add-user/add-user.component';
import { CategoryListComponent } from './Category/category-list/category-list.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { OrderListComponent } from './Order/order-list/order-list.component';
import { UserListComponent } from './User/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http'
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { AddOrderComponent } from './Order/add-order/add-order.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    FooterComponent,
    KanbanBoardComponent,
    CalendarComponent,
    ContactsComponent,
    ProjectsComponent,
    TicketsComponent,
    CompaniesComponent,
    DashboardComponent,
    OpportunitiesComponent,
    LeadsComponent,
    CustomersComponent,
    CrmContactsComponent,
    EcommerceDashboardComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    OrdersComponent,
    SellersComponent,
    SettingComponent,
    StarterComponent,
    LoginComponent,
    RegisterComponent,
    SigninSignupComponent,
    RecoverPasswordComponent,
    LockScreenComponent,
    LogoutComponent,
    ConfirmMailComponent,
    ErrorNotfoundComponent,
    ErrorAltComponent,
    ErrorInternalComponent,
    InboxComponent,
    ReadEmailComponent,
    ComposeEmailComponent,
    EmailTemplateComponent,
    SidebarUserComponent,
    SmallSidebarComponent,
    DarkSidebarComponent,
    LightTopbarComponent,
    PreloaderComponent,
    SidebarCollapsedComponent,
    BoxedComponent,
    ProfileComponent,
    TimelineComponent,
    SitemapComponent,
    InvoiceComponent,
    FAQsComponent,
    SearchResultsComponent,
    PricingComponent,
    MaintenanceComponent,
    ComingSoonComponent,
    GalleryComponent,
    ButtonsComponent,
    CardsComponent,
    PortletsComponent,
    TabsAccordionsComponent,
    ModalsComponent,
    ProgressComponent,
    NotificationsComponent,
    ImagesComponent,
    CarouselComponent,
    EmbedVideoComponent,
    DropdownsComponent,
    RibbonsComponent,
    TooltipPopoverComponent,
    GeneralUiComponent,
    TyphographyComponent,
    GridComponent,
    WidgetsComponent,
    NestableListComponent,
    RangeSliderComponent,
    AnimationComponent,
    SweetAlertComponent,
    TourPageComponent,
    LoadingButtonsComponent,
    FeatherIconsComponent,
    MaterialDesignIconsComponent,
    DripiconsComponent,
    FontAwesomeComponent,
    ThemifyComponent,
    SimpleLineComponent,
    WeatherComponent,
    GeneralElementsComponent,
    AdvancedComponent,
    ValidationComponent,
    PickersComponent,
    WizardComponent,
    MasksComponent,
    SummernoteComponent,
    QuilljsEditorComponent,
    FilesUploadsComponent,
    XEditableComponent,
    ImageCropComponent,
    BasicTablesComponent,
    DataTablesComponent,
    EditableTablesComponent,
    ResponsiveTablesComponent,
    FooTablesComponent,
    BootstrapTablesComponent,
    TablesawTablesComponent,
    JsgridTablesComponent,
    FlotChartsComponent,
    MorrisChartsComponent,
    ChartjsChartsComponent,
    PeityChartsComponent,
    ChartistChartsComponent,
    C3ChartsComponent,
    SparklinesChartsComponent,
    JqueryKnobChartsComponent,
    RicksawChartsComponent,
    JustgageChartsComponent,
    GoogleMapsComponent,
    VectorMapsComponent,
    MapaelMapsComponent,
    AddUserComponent,
    CategoryListComponent,
    AddCategoryComponent,
    OrderListComponent,
    UserListComponent,
    AddProductComponent,
    ProductListComponent,
    AddOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '372809179691-oj9rv4sps19qgsr7fauol3etb22to5fs.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('139740856620927')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
