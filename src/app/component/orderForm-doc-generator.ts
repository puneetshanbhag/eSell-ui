const orderFormHeaderTitle = 'ORDER FORM';

export class OrderFormDocumentCreator {

    // create(data) {

    //     const document = this.createDocxFile();

    //     return document;
    // }

    // createDocxFile() {
    //     const doc = new Document({
    //         creator: 'Tangoe Ezy2Sell tool',
    //         description: 'Tangoe Order Form',
    //         title: orderFormHeaderTitle,
    //     });

    //     // const img = require('../../assets/Tangoe-Logo-green.png');

    //     // const image = Media.addImage(doc, img);

    //     const table = new Table({
    //         rows: [
    //             new TableRow({
    //                 children: [
    //                     new TableCell({
    //                         children: [new Paragraph({
    //                             text: 'Customer Information (“Customer”)',
    //                             alignment: AlignmentType.LEFT
    //                         })],
    //                         verticalAlign: VerticalAlign.CENTER,
    //                     })
    //                 ],
    //             }),
    //             new TableRow({
    //                 children: [
    //                     new TableCell({
    //                         children: [
    //                             new Paragraph({
    //                                 text:
    //                                     'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
    //                                 heading: HeadingLevel.HEADING_1,
    //                             }),
    //                         ],
    //                     }),
    //                     new TableCell({
    //                         children: [
    //                             new Paragraph({
    //                                 text: 'This text should be in the middle of the cell',
    //                             }),
    //                         ],
    //                         verticalAlign: VerticalAlign.CENTER,
    //                     }),
    //                 ],
    //             }),
    //         ]
    //     });

    //     doc.addSection({
    //         headers: {
    //             default: new Header({
    //                 children: [new Paragraph('tangoe')],
    //             }),
    //         },
    //         footers: {
    //             default: new Footer({
    //                 children: [new Paragraph('Tangoe.com | 844.484.5041 | info@tangoe.com')],
    //             }),
    //         },
    //         children: [new Paragraph({
    //             text: orderFormHeaderTitle,
    //             heading: HeadingLevel.HEADING_1,
    //             alignment: AlignmentType.CENTER
    //         }), table],
    //     });

    //     return doc;
    // }

    // createFileHeader() {

    // }

    // createFileFooter() {

    // }
}
