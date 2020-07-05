import { Component, OnInit } from '@angular/core';
import { ConfirmDialogModule, ConfirmationService, SharedModule } from 'primeng';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfirmationService]

})
export class LoginComponent implements OnInit {

  public text: String = "Hello World!";

  constructor(private confirmationService: ConfirmationService) {}

  
  ngOnInit(): void {
  }

  confirm() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to perform this action?',
          accept: () => {
              //Actual logic to perform a confirmation
          }
      });
  }
}
