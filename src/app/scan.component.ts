import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
})
export class ScanComponent implements OnInit {
  constructor(private router: Router) {}

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent = new ZXingScannerComponent();

  qrResultString: string = '';
  availableDevices: String[] = [];

  ngOnInit(): void {
    // this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
    //   this.availableDevices = devices;
    //   console.log(devices);
    // });
  }

  camerasFound(result: any) {
    for (const camera of result) {
      this.availableDevices.push(camera.label);
    }
    console.log(result);
  }

  handleQrCodeResult(resultString: string) {
    console.debug('Result: ', resultString);
    const final_value = JSON.parse(resultString);
    this.qrResultString =
      'name: ' + final_value.name + ' age: ' + final_value.age;
  }
}
