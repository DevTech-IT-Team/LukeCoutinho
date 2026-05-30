import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  enrollProgram,
  SIGNATURE_LUKE_PROGRAM,
} from '../../../lib/enrollProgram';
import '../../../components/consult/book-consult-flow.css';

export default function ExclusiveProgram() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-4xl mx-auto pt-28">
      <h1 className="text-4xl font-bold mb-4">Exclusive Premium Program with Luke</h1>
      <p className="text-lg text-gray-700 mb-8">
        Detailed information about the exclusive premium Signature Wellness program will go here.
      </p>
      <button
        type="button"
        className="bcf-btn-next inline-flex items-center gap-2"
        onClick={() => enrollProgram(navigate, SIGNATURE_LUKE_PROGRAM)}
      >
        Enroll now
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
