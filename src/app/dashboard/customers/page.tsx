'use client';
import Head from 'next/head';
import MediaPlayer from '../../ui/media-player';

export default function Page() {
  // Example URLs
  const videoUrl = 'https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8';
  const audioUrl =
    'https://turboscribe.ai/_content/id/702561541870757687.mp3?s=igdx_6f4gp9JD-qhEhULVZ2lZpH2fI16C_6lfR1gyog';

  return (
    <div>
      <Head>
        <title>Next.js Media Player</title>
      </Head>
      <main>
        <h1>Welcome to the Media Player Page</h1>
        <h2>Video Player</h2>
        <MediaPlayer src={videoUrl} video={true} />
        <h2>Audio Player</h2>
        <MediaPlayer src={audioUrl} video={false} />
      </main>
    </div>
  );
}
