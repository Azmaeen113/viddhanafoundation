// Email utility functions for form submissions

const WEBSITE_EMAIL = 'hello@viddhana.io';

export interface FormData {
  [key: string]: string | boolean | number;
}

export function generateEmailBody(formData: FormData, formType: string): string {
  let body = `Form Submission: ${formType}\n\n`;
  body += '='.repeat(50) + '\n\n';
  
  Object.entries(formData).forEach(([key, value]) => {
    const label = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
    body += `${label}: ${value}\n`;
  });
  
  body += '\n' + '='.repeat(50) + '\n';
  body += `\nSubmitted on: ${new Date().toLocaleString()}\n`;
  
  return body;
}

export function openEmailClient(formData: FormData, subject: string, formType: string) {
  const body = generateEmailBody(formData, formType);
  const mailtoLink = `mailto:${WEBSITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

export function openEmailWithInstructions(formData: FormData, subject: string, formType: string, attachmentInstructions: string) {
  const body = generateEmailBody(formData, formType);
  const fullBody = body + '\n\n' + attachmentInstructions;
  const mailtoLink = `mailto:${WEBSITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  window.location.href = mailtoLink;
}

export { WEBSITE_EMAIL };
