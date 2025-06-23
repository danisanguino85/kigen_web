import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/inicio' },
    { path: 'inicio', component: DashboardComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'sobre_nosotros', component: SobreNosotrosComponent },
    { path: 'horarios', component: HorariosComponent },
    { path: 'footer', component: FooterComponent },



];
