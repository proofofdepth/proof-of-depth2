
import React from 'react';

export default function ProofOfDepthLanding() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', lineHeight: 1.6 }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Proof of Depth</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>
          Underwater inspections powered by blockchain-certified transparency.
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

      <section style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
        {[
          { title: 'Underwater Inspections', desc: 'Bridge, port, and marine structure inspections using Vision Ray Defender ROVs.' },
          { title: 'NFT-Certified Reports', desc: 'All missions logged, timestamped, and verified via Ethereum or Solana blockchain.' },
          { title: 'DAO Governance', desc: '$DEPTH token holders vote on projects and environmental missions.' },
        ].map((card, idx) => (
          <div key={idx} style={{
            border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', width: '300px', background: '#f9f9f9'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{card.title}</h3>
            <p style={{ color: '#555' }}>{card.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Led by a Navy Diver</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#444' }}>
          Built by a U.S. Navy Diver trained on ROV systems to bring trust, transparency, and real-world data to the blockchain.
        </p>
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Launch Timeline</h3>
          <ul style={{ color: '#555' }}>
            <li>Q2 2025 – Legal formation & demo mission</li>
            <li>Q3 2025 – NFT mission certification</li>
            <li>Q4 2025 – DAO & $DEPTH token release</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Who We Serve</h3>
          <ul style={{ color: '#555' }}>
            <li>Harbors & port authorities</li>
            <li>Environmental & marine NGOs</li>
            <li>Web3 impact investors & DAO members</li>
          </ul>
        </div>
      </section>

      <footer style={{ textAlign: 'center', color: '#aaa', fontSize: '0.9rem' }}>
        © 2025 Proof of Depth. Built from the deep.
      </footer>
    </main>
  );
}
