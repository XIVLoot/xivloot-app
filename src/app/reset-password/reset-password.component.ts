import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';
  token: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private route: ActivatedRoute, public http: HttpService) {}

  ngOnInit() {
    // Parse query parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
      this.token = params['token'] || '';
      
      console.log('Email:', this.email);
      console.log('Token:', this.token);
    });
  }

  
  resetPassword()
  {
    if(this.password !== this.confirmPassword)
    {
      // Nohting for now
    }
    else
    {
      this.http.ResetPassword(this.email, this.token, this.password).subscribe(data => {
        console.log(data);
      });
    }
  }
}
