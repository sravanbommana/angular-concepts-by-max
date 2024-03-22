import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private accountService: AccountService) {
  }
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
