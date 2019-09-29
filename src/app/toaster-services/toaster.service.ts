import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ToasterService {

    constructor(private toaster:ToastrService) { }
    sucsessToaster(){
        this.toaster.success('This is sucsess toastr...')
    }
    infoToaster(){
        this.toaster.info('This is info toastr...')
    }
    warningToaster(){
        this.toaster.warning('This is warning toastr...')
    }
    errorToaster(){
        this.toaster.error('This is error toastr...')
    }
}