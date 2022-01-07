import { Component, OnInit, ViewChild , AfterViewInit, ElementRef } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';

//import { ZXingScannerModule } from '@zxing/ngx-scanner';
import adapter from 'webrtc-adapter';

//import { Result } from '@zxing/library';
import { BarcodeFormat } from '@zxing/library';
import { Stream } from 'stream';

// //const videoElement = document.querySelector('video');
// const audioInputSelect = document.querySelector('select#audioSource');
// const audioOutputSelect = document.querySelector('select#audioOutput');
// const videoSelect = document.querySelector('select#videoSource');
// const selectors = [audioInputSelect, audioOutputSelect, videoSelect];

var choice!: string;

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit {

  @ViewChild('vidchoice')
  vidchoice!: HTMLSelectElement;

  @ViewChild('scanner', {static: true})
  scanner!: ZXingScannerComponent;

  // @ViewChild('ddiv', {static: true})
  // ddiv!: ElementRef<HTMLDivElement>

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  hasDevices!: boolean;
  hasPermission!: boolean;

  // qrResultString!: string;
  // //qrResult!: Result;

  //currentDevice = choice;
  availableDevices?: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo;

  constraints : MediaStreamConstraints =
  {audio : false ,
  video : true
  // { deviceId: choice ? {exact : choice} : undefined }
    // {width: 640,
    // height: 640
    // { facingMode: "environment" }
  };

  constructor( private router : Router)
  {}


    async ngAfterViewInit()
    {

      const videoSelect = document.querySelector('select#videoSource');
      // const videoSelect = this.vidchoice;

      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);

      await navigator.mediaDevices.enumerateDevices()
        .then( eee => {
          for (let i = 0; i !== eee.length; ++i) {
            const deviceInfo = eee[i];
            const option = document.createElement('option');
            option.value = deviceInfo.deviceId;
            if (deviceInfo.kind === 'videoinput') {
              option.text = deviceInfo.label;
              videoSelect?.appendChild(option);
            }
          }
        });

      // videoSelect.onchange = this.start;

      // const stream = await navigator.mediaDevices.getUserMedia({video: {deviceId: {exact: choice}}});
      // const test = await this.scanner.updateVideoInputDevices();

      // //this.scanner.reset()

      // //this.scanner.device = test[0];
      // //choice = test[0].deviceId;
      // const aaa = test[2];
      // choice = aaa.deviceId;
      // this.scanner.device = aaa;
      // console.log("objective is ", aaa);
      // console.log("device = ", this.scanner.device);
      // //console.log(aaa);

      const video = document.querySelector('video');
      video!.srcObject = stream;
      video!.onloadedmetadata = function(e)
        {video!.play();}


      // console.log("device 2 = ", this.scanner.device);
      //this.start();

      //console.log(this.router.url)

    // try {
    //   //this.scanner.askForPermission();
    //   const stream = navigator.mediaDevices.getUserMedia(this.constraints);
    //   // this.handleSuccess(stream);
    // }
    // catch (e)
    // {
    //   console.log(":(   // ", e);
    // }

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

  public async start() {
    console.log("WE SEE IT CHANGES")
    navigator.mediaDevices.getUserMedia(this.constraints)
    .then ( med =>
      {med.getTracks()
      .forEach ( track =>
        {track.stop();});});
    const videoSource = this.vidchoice.value;


    console.log(this.vidchoice.v)


    const constraints = {
      audio: false,
      video: {deviceId: videoSource ? {exact: videoSource} : undefined}
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const video = document.querySelector('video');
    video!.srcObject = stream;
    video!.onloadedmetadata = function(e)
      {video!.play();}
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

  private async handleSuccess(stream : MediaStream) {
    this.scanner.askForPermission();


    // navigator.mediaDevices.enumerateDevices()
    //   .then( aaa =>
    //     {
    //       console.log(aaa);
    //       choice = aaa[1].deviceId
    //     });


    // const test = await this.scanner.updateVideoInputDevices();
    // const aaa = test[3];
    // console.log(aaa);
    // choice = aaa.deviceId;

    //console.log(adapter.extractVersion);

    // .then( aaa =>
    //   {
    //     console.log(aaa);
    //     choice = aaa[0].deviceId
    //   });

    const video = document.querySelector('video');
    video!.srcObject = stream;
    video!.onloadedmetadata = function(e)
      {video!.play();}
    //console.log('after loading ',this.currentDevice)
  }

}

