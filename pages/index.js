
import Head from 'next/head';
import ProofOfDepthLanding from '../components/ProofOfDepthLanding';

export default function Home() {
  return (
    <>
      <Head>
        <title>Proof of Depth</title>
        <meta name="description" content="Underwater inspections powered by blockchain transparency" />
      </Head>
      <ProofOfDepthLanding />
    </>
  );
}
