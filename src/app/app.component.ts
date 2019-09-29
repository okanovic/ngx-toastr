import { Component, OnInit } from '@angular/core';
import { ToastrNameService } from './datas/mock-datas.service';
import { ToasterService } from './toaster-services/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  toastrNames;
  succsess;
  info;
  error;
  warning;
  constructor(private toastrName:ToastrNameService, private toastr:ToasterService){}
  showToastr(toasterInfo){
    if(toasterInfo == "Succsess"){
      this.succsess = this.toastr.sucsessToaster()
    }else if(toasterInfo == "Info"){
      this.info = this.toastr.infoToaster()
    }else if(toasterInfo == "Warning"){
      this.info = this.toastr.warningToaster()
    }
    else if(toasterInfo == "Error"){
      this.info = this.toastr.errorToaster()
    }
  }
  ngOnInit(){
    //Toaster metodlarımı çektiğim satır
    this.toastrNames = this.toastrName.getToastrNames();
  }
}
