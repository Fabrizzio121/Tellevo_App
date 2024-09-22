import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScanPageRoutingModule } from './scan-routing.module';
import { ScanPage } from './scan.page';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';  // Importar BarcodeScanner

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPageRoutingModule
  ],
  declarations: [ScanPage],
  providers: [BarcodeScanner]  // Proveer BarcodeScanner
})
export class ScanPageModule {}

