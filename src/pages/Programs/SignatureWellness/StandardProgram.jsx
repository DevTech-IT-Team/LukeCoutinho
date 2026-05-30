import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  enrollProgram,
  SIGNATURE_TEAM_PROGRAM,
} from '../../../lib/enrollProgram';
import '../../../components/consult/book-consult-flow.css';

export default function StandardProgram() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-4xl mx-auto pt-28">
      <h1 className="text-4xl font-bold mb-4">Standard Signature Wellness Program</h1>
      <p className="text-lg text-gray-700 mb-8">
        Detailed information about the standard Signature Wellness program will go here.
      </p>
      <button
        type="button"
        className="bcf-btn-next inline-flex items-center gap-2"
        onClick={() => enrollProgram(navigate, SIGNATURE_TEAM_PROGRAM)}
      >
        Enroll now
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
