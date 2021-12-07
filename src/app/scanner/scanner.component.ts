import { Component, OnInit, ViewChild , AfterViewInit, ElementRef } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
//import { ZXingScannerModule } from '@zxing/ngx-scanner';

//import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';
import { Stream } from 'stream';

// //const videoElement = document.querySelector('video');
// const audioInputSelect = document.querySelector('select#audioSource');
// const audioOutputSelect = document.querySelector('select#audioOutput');
// const videoSelect = document.querySelector('select#videoSource');
// const selectors = [audioInputSelect, audioOutputSelect, videoSelect];

var choice!: ConstrainDOMString;

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit {

  @ViewChild('scanner', {static: true})
  scanner!: ZXingScannerComponent;

  // @ViewChild('ddiv', {static: true})
  // ddiv!: ElementRef<HTMLDivElement>

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  hasDevices!: boolean;
  hasPermission!: boolean;
  // qrResultString!: string;
  // //qrResult!: Result;

  availableDevices?: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo;

  constraints : MediaStreamConstraints =
  {audio : false ,
  video : { deviceId: choice}
    // {width: 640,
    // height: 640
    // { facingMode: "environment" }
  };

  constructor()
  {}


    ngAfterViewInit()
    {
    //console.log((await this.scanner.askForPermission()).valueOf());

    //console.log(this.availableDevices);
    //const test = await this.scanner.getAnyVideoDevice();
    //console.log(test);

    try {
      const stream = navigator.mediaDevices.getUserMedia(this.constraints).then( data => (this.handleSuccess(data)));
      // this.handleSuccess(stream);
    }
    catch (e)
    {
      console.log(":(   // ", e);
    }
    //choice = this.availableDevices

    // this.scanner.camerasFound.subscribe(
    //   (cameras: MediaDeviceInfo[]) =>
    //     {
    //       //console.log('first camera ', cameras);
    //       if (cameras && cameras.length > 0) {
    //       this.hasDevices = true;
    //       var temp = cameras[3]
    //       this.currentDevice = temp ;
    //       this.choice = temp.deviceId;
    //       console.log('after selection', temp);
    //       // cameras.find(
    //       //   (c) =>
    //       //     c.label.includes('back')) || cameras[0];
    //     }}
    //   );

  }

  // private launch(video : any)
  //   {navigator.mediaDevices.getUserMedia(this.constraints)
  //     .then(stream =>
  //       { console.log('scanner is ', this.scanner);
  //         console.log('video is ', video);
  //         console.log('stream is ', stream);
  //         console.log('camera is ', this.currentDevice);
  //         video!.srcObject = stream;
  //         //this.scanner.device = this.currentDevice;
  //       }
  //     );}

  private handleSuccess(stream : MediaStream) {
    this.scanner.askForPermission();


    // navigator.mediaDevices.enumerateDevices()
    //   .then( aaa =>
    //     {
    //       console.log(aaa);
    //       choice = aaa[1].deviceId
    //     });


    this.scanner.updateVideoInputDevices()
    .then( aaa =>
      {
        console.log(aaa);
        choice = aaa[0].deviceId
      });

    const video = document.querySelector('video');
    video!.srcObject = stream;
    video!.onloadedmetadata = function(e)
      {video!.play();}
    //console.log('after loading ',this.currentDevice)
  }

}

