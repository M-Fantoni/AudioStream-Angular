import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {

    //Observable Sources
    private displaySource = new Subject<any>();
    private confirmSource = new Subject<boolean>()

    //Observable streams
    display$ = this.displaySource.asObservable();
    confirm$ = this.confirmSource.asObservable();

    toggle(isOpen: boolean, url : string) {
      console.log("toggle called")
        this.displaySource.next({ isOpen, url })
    }

    Confirmation(isConfirmed: boolean) {
        this.confirmSource.next(isConfirmed)
    }
}