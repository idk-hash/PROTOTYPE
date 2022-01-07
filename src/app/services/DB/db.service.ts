import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  //  public async sayHello() {
  //   if (typeof Worker !== 'undefined') {
  //     const worker = new Worker('./services/DB/db.worker.ts',
  //                              { type: 'module' });

  //     worker.onmessage = ({ data }) => {
  //       console.log(`page got message: ${data}`);
  //     };

  //     worker.postMessage('hello');
  //   }
  // }

}
