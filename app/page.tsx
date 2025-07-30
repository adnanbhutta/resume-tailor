'use client';
import { useState } from 'react';

export default function Home() {
  const [resume, setResume] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/tailor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resume, jobDesc }),
    });
    const data = await res.json();
    setResult(data.tailored);
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Resume Tailor</h1>
      <textarea
        placeholder="Paste your resume"
        value={resume}
        onChange={e => setResume(e.target.value)}
        className="w-full h-32 border p-2 mb-4"
      />
      <textarea
        placeholder="Paste job description"
        value={jobDesc}
        onChange={e => setJobDesc(e.target.value)}
        className="w-full h-32 border p-2 mb-4"
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Tailor Resume
      </button>
      {result && (
        <div className="mt-6 p-4 border bg-gray-100">
          <h2 className="font-semibold">Tailored Resume:</h2>
          <pre>{result}</pre>
        </div>
      )}
    </main>
  );
}
