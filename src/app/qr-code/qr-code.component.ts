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
    const c = <CanvasRenderingContext2D> canvas.getContext("2d");
    //canvas.style.visibility = "hidden";
    const code_data = [];

    JsBarcode(canvas,"Please help me",
      {width:2,
      height:20,
      displayValue: false,
      margin: 0}
      );
      for (let i = 0; i < canvas.width; i++) {
        var p = c.getImageData(i, 0, 1, 1).data;
        code_data[i] = p[0];}
      console.log(code_data);
      //console.log(i, " = ", p[0], p[1], p[2])
  }
}
