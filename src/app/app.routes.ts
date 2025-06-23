import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClasesComponent } from './pages/clases/clases.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/inicio' },
    {
        path: 'inicio', component: DashboardComponent, children: [
            { path: 'nosotros', component: SobreNosotrosComponent },
            { path: 'contacto', component: ContactoComponent },
            { path: 'clases', component: ClasesComponent },
            { path: 'contacto', component: ContactoComponent },
            { path: 'horarios', component: HorariosComponent }
        ]
    },

];
