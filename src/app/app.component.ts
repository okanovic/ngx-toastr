import { Component, OnInit } from '@angular/core';
import { ToastrNameService } from './datas/mock-datas.service';
import { ToasterServiceMethods } from './toastr-services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  toastrNames;
  success;
  info;
  error;
  warning;
  constructor(private toastrName:ToastrNameService, private toastr:ToasterServiceMethods){}
  showToastr(toasterInfo){
    if(toasterInfo == "Success"){
      this.success = this.toastr.sucsessToaster()
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
