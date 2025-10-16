"use client";

import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', margin: '40px 0' }}>
      <button onClick={() => router.back()} className="btn btn-primary">
        &larr; Back
      </button>
    </div>
  );
};

export default BackButton;
