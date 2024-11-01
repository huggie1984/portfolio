'use client';
import { useCallback } from 'react';

export const ExportPdfButton = ({ elementId }: { elementId: string }) => {
  const generatePdf = useCallback(async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById(elementId) as HTMLElement;
    if (!element) return;
    html2pdf()
      .from(element)
      .set({
        margin: [0.05, 0.05, 0.05, 0.05],
        filename: 'high-resolution-export.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      })
      .save();
  }, [elementId]);

  return (
    <button className="link-dark dark:link-light" onClick={() => generatePdf()}>
      Download
    </button>
  );
};
