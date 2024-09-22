import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage {

  constructor(private barcodeScanner: BarcodeScanner, private alertController: AlertController) {}

  async scanQR() {
    try {
      const result = await this.barcodeScanner.scan();
      console.log('Scan result:', result);

      
      const alert = await this.alertController.create({
        header: 'Código QR Escaneado',
        message: `Código: ${result.text}`,
        buttons: ['OK']
      });
      await alert.present();

    } catch (error) {
      console.error('Error al escanear el código QR:', error);
      // Mostrar un mensaje de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo escanear el código QR.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
