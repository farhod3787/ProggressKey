import { Component, OnInit } from '@angular/core';
import { ResgistrarService } from 'src/app/shared/service/registrarService';

@Component({
  selector: 'app-register-setting',
  templateUrl: './register-setting.component.html',
  styleUrls: ['./register-setting.component.css']
})
export class RegisterSettingComponent implements OnInit {

  inform: any = {};
  constructor(
    private registerService: ResgistrarService
  ) {
    this.getInform();
  }

  getInform() {
      this.registerService.getId(localStorage.getItem('_id')).subscribe( result => {
        this.inform = result.json();
      });
  }

  ngOnInit(): void {
  }

}
