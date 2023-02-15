import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.css'],
})
export class MembershipFormComponent {
  currentRoute = this.router.url;

  constructor(private router: Router) {}
}
