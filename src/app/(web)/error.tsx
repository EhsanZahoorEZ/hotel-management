'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='container mx-auto px-3'>
      <h2 className='font-heading text-red-800 mb-10 font-serif'>Something went wrong!</h2>

      <button onClick={() => reset()} className='btn-primary font-serif border-2 border-gray-300 '>
         Try Again
      </button>
    </div>
  );
}
