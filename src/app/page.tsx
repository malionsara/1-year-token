'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Clerk Auth Demo</h1>
      <nav>
        <Link href="/sign-in">Sign In</Link>
        <br />
        <Link href="/dashboard">Dashboard (Protected)</Link>
      </nav>
    </div>
  );
}
