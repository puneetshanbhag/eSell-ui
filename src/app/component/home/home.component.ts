import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selected = null;
  tangoeImgUrl: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // prod section
  isTelecomChecked = false;
  isMobileChecked = false;
  isCloudChecked = false;

  checked = false;
  isCopyCompanyAddress = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  includeOrderProcessing = false;
  step = 0;

  products: any = [];

  constructor(
    // tslint:disable-next-line:variable-name
    private _formBuilder: FormBuilder,
    private dataService: DataService) {
    this.tangoeImgUrl = 'https://www.tangoe.com/wp-content/uploads/2018/03/Tangoe-Logo-green.png';
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.products = this.dataService.getProducts();
  }

  async generatePdf(action = 'open') {
    const documentDefinition = {
      footer: this.getDocumentFooter(),
      watermark: this.getDocumentWaterMark(),
      content: [{
        image: await this.getBase64ImageFromURL(this.tangoeImgUrl),
        fit: [100, 100],
        alignment: 'right'
      }, 'January 3, 2020\n\n',
      {
        alignment: 'left',
        columns: [
          {
            text: 'Jim Hendrickson\nChief Information Officer\n' +
              'Federal Reserve Bank\nOne Reserve Way\nRichmond, Virginia 34225\n\n'
          }
        ]
      }, 'Dear Jim:\n\n',
        'Thank you for considering us for your telecom expense management,',
        'managed mobility services, and cloud expense management requirements.',
        'Tangoe has the size, scale, capabilities, and global reach needed for your unique goals.\n\n',
        'We propose the Tangoe Platform, a complete solution for technology order management,',
        'invoice management, and expense management to meet your needs.',
        'We will get your orders right, pay your bills correctly and on time, and find savings all',
        'along the way;saving you time, money, and ****.\n\n',
        'Please consider the attached proposal. All of us at Tangoe are committed to your success.\n\n',
        'Sincerely,\n\n\n\n\n',
        'Bob Irwin\nOver-Managed Sales Representative\nTangoe'
      ]
    };

    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download('tangoe_quote_document.pdf'); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getDocumentFooter() {
    return {
      text: 'Robert D. Irwin  |  Over-Managed Sales Representative  |  Tangoe  |  614.214.2230  |  Over-ManagedBob@Tangoe.com',
      fontSize: 8,
      alignment: 'center'
    };
  }

  getDocumentWaterMark() {
    return { text: 'tangoe', color: 'green', opacity: 0.03, bold: false, italics: false };
  }

  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL('image/png');

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }

}
