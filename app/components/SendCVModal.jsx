'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { scaleIn } from '../Data';
import { Field } from './Field';
import { Button } from './Buttons';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const MAX_FILE_SIZE_LABEL = '5 MB';

function validateFileSize(file) {
  if (file && file.size > MAX_FILE_SIZE) {
    return `"${file.name}" is too large (${(file.size / (1024 * 1024)).toFixed(1)} MB). Maximum file size is ${MAX_FILE_SIZE_LABEL}.`;
  }
  return null;
}

export function SendCVModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [motLetterFile, setMotLetterFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [motLetterError, setMotLetterError] = useState('');

  function handleFileChange(e) {
    const selected = e.target.files[0];
    const error = validateFileSize(selected);
    setFileError(error || '');
    setFile(error ? null : selected);
    if (error) e.target.value = '';
  }

  function handleMotLetterChange(e) {
    const selected = e.target.files[0];
    const error = validateFileSize(selected);
    setMotLetterError(error || '');
    setMotLetterFile(error ? null : selected);
    if (error) e.target.value = '';
  }

  const handleSendCV = async () => {
    try {
      if (!name || !email || !phone) {
        alert('Please fill in all the fields before sending.');
        return;
      }
      if (!file) {
        alert('Please upload your CV before sending.');
        return;
      }
      if (fileError || motLetterError) {
        alert('Please fix the file size errors before sending.');
        return;
      }

      alert('Your CV has been sent successfully!');

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append(
        'message',
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDesired Position(s): ${position}\n\n[CV attached]\n${motLetterFile ? '[Motivation Letter attached]' : '[No Motivation Letter]'}`
      );
      if (file) formData.append('file', file);
      if (motLetterFile) formData.append('motivationLetter', motLetterFile);

      setName('');
      setEmail('');
      setPhone('');
      setPosition('');
      setMessage('');
      setFile(null);
      setMotLetterFile(null);
      onClose();

      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      // Read the body as text first so we can safely diagnose non-JSON responses.
      const raw = await res.text();
      let data;
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch (parseErr) {
        console.error('Non-JSON response from /api/send-email:', {
          status: res.status,
          contentType: res.headers.get('content-type'),
          body: raw,
        });
        alert(`Server returned an invalid response (${res.status}). Check console.`);
        return;
      }

      if (!res.ok || !data.success) {
        const msg = res.status === 413
          ? `The uploaded files are too large. Maximum file size is ${MAX_FILE_SIZE_LABEL} per file.`
          : data.error || `HTTP ${res.status}`;
        alert(msg);
      }
    } catch (error) {
      console.error('FRONTEND ERROR:', error);
      alert('Error sending your CV. Please try again later or contact us directly at info@stmconsulting.io');
    }
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80">
      <div className="flex min-h-full items-center justify-center p-4">
      <motion.form
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E6EBE7] bg-white p-5 shadow-[0_8px_24px_rgba(24,32,28,0.05)] sm:rounded-[2rem] sm:p-8 md:p-10 lg:px-16 lg:py-12 text-left"
      >
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 mb-4 sm:mb-5">
          <Field required label="Name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <Field required label="Email" placeholder="you@mail.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 mb-4 sm:mb-5">
          <Field required label="Phone" placeholder="Your phone number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Field required label="Desired Position/s" placeholder="Your desired position/s" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 mb-4 sm:mb-5">
          <label className="block">
            <p className="text-sm font-semibold mb-1 text-black">Upload your CV</p>
            <input
              id="cv-file"
              accept=".pdf, .doc, .docx"
              className="w-full cursor-pointer rounded-md border border-[#414042] bg-[#414042] p-2 text-sm text-white shadow-sm file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-white file:px-3 file:py-1 file:text-sm file:font-semibold file:text-[#414042] hover:file:bg-[#F1F4F2]"
              type="file"
              onChange={handleFileChange}
            />
            {fileError
              ? <p className="mt-1 text-xs text-red-600">{fileError}</p>
              : <p className="mt-1 text-xs text-[#9AA19B]">PDF, DOC, or DOCX — max {MAX_FILE_SIZE_LABEL}</p>
            }
          </label>
          <label className="block">
            <p className="text-sm font-semibold mb-1 text-black">Upload your Motivation Letter</p>
            <input
              id="motivation-letter-file"
              accept=".pdf, .doc, .docx"
              className="w-full cursor-pointer rounded-md border border-[#414042] bg-[#414042] p-2 text-sm text-white shadow-sm file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-white file:px-3 file:py-1 file:text-sm file:font-semibold file:text-[#414042] hover:file:bg-[#F1F4F2]"
              type="file"
              onChange={handleMotLetterChange}
            />
            {motLetterError
              ? <p className="mt-1 text-xs text-red-600">{motLetterError}</p>
              : <p className="mt-1 text-xs text-[#9AA19B]">PDF, DOC, or DOCX — max {MAX_FILE_SIZE_LABEL}</p>
            }
          </label>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <Button icon={<Send size={16} />} onClick={handleSendCV} type="button">
            Send Your CV
          </Button>
          <Button variant="secondary" onClick={onClose} type="button">
            Close
          </Button>
        </div>
      </motion.form>
      </div>
    </div>,
    document.body
  );
}
