
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Waves, ShipWheel, Globe, Layers3 } from 'lucide-react';

export default function ProofOfDepthLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 md:px-20">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Proof of Depth</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          ROV-powered underwater inspections with blockchain-certified transparency.
        </p>
        <div className="mt-6">
          <Button size="lg">Join the Mission</Button>
        </div>
      </section>
    </main>
  );
}
