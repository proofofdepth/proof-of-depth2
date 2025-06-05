
import React from 'react';

export default function ProofOfDepthLanding() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Proof of Depth</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          ROV-powered underwater inspections with blockchain-certified transparency.
        </p>
        <button style={{
          marginTop: '1.5rem',
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Join the Mission
        </button>
      </section>
    </main>
  );
}
