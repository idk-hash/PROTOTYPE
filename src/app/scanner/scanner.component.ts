import { AfterViewInit, Component, Inject } from '@angular/core';
import Quagga from '@ericblade/quagga2';
import { Router } from '@angular/router'
import { CONF } from '../services/CONF/conf.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'

const environmentFacingCameraLabelStrings: string[] = [
  'rear',
  'back',
  'rück',
  'arrière',
  'trasera',
  'trás',
  'traseira',
  'posteriore',
  '后面',
  '後面',
  '背面',
  '后置', // alternative
  '後置', // alternative
  '背置', // alternative
  'задней',
  'الخلفية',
  '후',
  'arka',
  'achterzijde',
  'หลัง',
  'baksidan',
  'bagside',
  'sau',
  'bak',
  'tylny',
  'takakamera',
  'belakang',
  'אחורית',
  'πίσω',
  'spate',
  'hátsó',
  'zadní',
  'darrere',
  'zadná',
  'задня',
  'stražnja',
  'belakang',
  'बैक'];

export interface DialogData {
    str: string;
  }

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements AfterViewInit {
  started: boolean | undefined;
  errorMessage: string | undefined;

  constructor
    ( public router : Router,
      public conf : CONF,
      public dialog: MatDialog )
    { router.events.subscribe((val) =>
        { if (router.url != '/Scanner' && this.started) Quagga.stop(); }); }

  ngAfterViewInit(): void
    { if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function'))
      { this.errorMessage = 'getUserMedia is not supported'; return; }
    this.initializeScanner(); }

  private initializeScanner(): Promise<void>
    { if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function'))
      { this.errorMessage = 'getUserMedia is not supported. Please use Chrome on Android or Safari on iOS';
        this.started = false;
        return Promise.reject(this.errorMessage); }
    return Quagga.CameraAccess.enumerateVideoDevices()
      .then( mediaDeviceInfos =>
        { const mainCamera = this.getMainBarcodeScanningCamera(mediaDeviceInfos);
          if (mainCamera)   return this.initializeScannerWithDevice(mainCamera.deviceId);
          else              return this.initializeScannerWithDevice(undefined); })
      .catch( error =>
        { this.errorMessage = `Failed to enumerate devices: ${error}`;
          this.started = false; }) ;}

  private initializeScannerWithDevice(preferredDeviceId: string | undefined): Promise<void>
    { console.log(`Initializing Quagga scanner...`);
      const constraints: MediaTrackConstraints = {};
        // {width: 640,
        // height: 640}
      if (preferredDeviceId)  constraints.deviceId = preferredDeviceId;
      else                    constraints.facingMode = 'environment';
      return Quagga.init(
        { inputStream:
            { type: 'LiveStream',
              constraints,
              target: document.querySelector('#interactive') ?? undefined,
              area: { top: "0%", right: "0%", left: "0%", bottom: "0%" }},
          decoder:
            { readers: ['code_128_reader'],
            multiple: false },
          locate: true },
        (err) =>
          { if (err)
            { console.error(`Quagga initialization failed: ${err}`);
              this.errorMessage = `Initialization error: ${err}`;
              this.started = false; }
          else
            { console.log(`Quagga initialization succeeded`);
              Quagga.start();
              this.started = true;
              Quagga.onDetected((res) =>
                { Quagga.stop();
                  if (res.codeResult.code) this.onBarcodeScanned(res.codeResult.code); });} }); }

  private onBarcodeScanned(code: string): void
    { if (code.includes('points'))
      { this.conf.points += 10;
        this.started = false;
        const dialogRef = this.dialog.open(DialogDataExampleDialogAAA,
                            { position:
                              { top: '35vh',
                                left: '5vw'},
                              width: '90vw',
                              // height: '30vh',
                              hasBackdrop: false});
        dialogRef.afterClosed().subscribe( () => {this.router.navigate(['menu']);} );
      }
    }

  private isKnownBackCameraLabel(label: string): boolean
    { const labelLowerCase = label.toLowerCase();
      return environmentFacingCameraLabelStrings
        .some( str => { return labelLowerCase.includes(str); }); }

  private getMainBarcodeScanningCamera(devices: MediaDeviceInfo[]): MediaDeviceInfo | undefined
    { const backCameras = devices.filter(v => this.isKnownBackCameraLabel(v.label));
      const sortedBackCameras = backCameras.sort((a, b) => a.label.localeCompare(b.label));
      return sortedBackCameras.length > 0 ? sortedBackCameras[0] : undefined; }

}

@Component({
  selector: 'dialog-data-example-dialog',
  template:`<h1 mat-dialog-title>Dialog with elements</h1>
  <div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close>Close</button>
  </div>`
})
export class DialogDataExampleDialogAAA {}
