'use client';
import { useCallback } from 'react';
import { Download } from '@/components/icons/Download';

export const ExportPdfButton = ({ elementId }: { elementId: string }) => {
  const generatePdf = useCallback(async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById(elementId) as HTMLElement;
    if (!element) return;
    html2pdf()
      .from(element)
      .set({
        margin: 0,
        filename: 'matthew-huggett-resume.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      })
      .save();
  }, [elementId]);

  return (
    <button
      className="flex items-center gap-2 link-dark"
      onClick={() => generatePdf()}
    >
      <Download />
      <span className="hidden sm:block">Download</span>
    </button>
  );
};
