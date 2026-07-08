'use client';

import Link from 'next/link';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <main className="min-h-screen flex items-center justify-center bg-white text-[#1F2937]">
          <div className="max-w-[720px] p-8 text-center">
            <h1 className="text-3xl font-[700] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Something went wrong.</h1>
            <p className="text-[15px] font-[300] text-[#1F2937]/70 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>{error?.message ?? 'An unexpected error occurred.'}</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/" className="inline-flex items-center rounded-full border border-[#E6E6E6] px-6 py-3 text-[14px] font-[500]">Return Home</Link>
              <Link href="/quote" className="inline-flex items-center rounded-full bg-[#C8A45D] px-6 py-3 text-[14px] font-[600] text-[#1F2937]">Request Consultation</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
