'use client';
import html2pdf from 'html2pdf.js';

export const ExportPdfButton = ({ elementId }: { elementId: string }) => (
  <button
    className="link-dark dark:link-light"
    onClick={() => generatePdf(elementId)}
  >
    Download
  </button>
);

const generatePdf = (elementId: string) => {
  const element = document.getElementById(elementId) as HTMLElement;
  html2pdf()
    .from(element)
    .set({
      margin: [0.05, 0.05, 0.05, 0.05],
      filename: 'high-resolution-export.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 3 }, // Higher scale improves resolution (default is 1)
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    })
    .save();
};
