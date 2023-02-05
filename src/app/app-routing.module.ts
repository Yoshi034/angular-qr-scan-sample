import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescanComponent } from './prescan.component';
import { ScanComponent } from './scan.component';

const routes: Routes = [
  { path: 'qr-scan', component: ScanComponent },
  { path: 'qr-prescan', component: PrescanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
