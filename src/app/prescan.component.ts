import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescan',
  templateUrl: './prescan.component.html',
})
export class PrescanComponent {
  constructor(private router: Router) {}
  scan() {
    this.router.navigate(['/qr-scan']);
  }
}
