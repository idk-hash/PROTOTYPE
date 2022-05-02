import { Component, OnInit } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})

export class QrCodeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const canvas = <HTMLCanvasElement> document.getElementById("barcode");
    const canvas1 = <HTMLCanvasElement> document.getElementById("barcode1");
    const canvas2 = <HTMLCanvasElement> document.getElementById("barcode2");
    const c = <CanvasRenderingContext2D> canvas.getContext("2d");
    const code_data = [];
    const HH = 100;
    // JsBarcode(canvas,"Please help me",
    //   { width:2,
    //     height:HH,
    //     displayValue: true,
    //     margin: 10 });
    JsBarcode(canvas1,"points plus 10",
      { width:2,
        height:HH,
        displayValue: true,
        margin: 10 });
    // JsBarcode(canvas2,"record profile",
    //   { width:2,
    //     height:HH,
    //     displayValue: true,
    //     margin: 10 });
    for (let i = 0; i < canvas.width; i++)
      { var p = c.getImageData(i, 0, 1, 1).data;
        code_data[i] = p[0]; }
    console.log(code_data);}
}
