import LandingPage from '@/components/landingapge';
import Script from 'next/script';

export default function Home() {
  return (
    <>
    <Script
    src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></Script>
    <Script
    src="https://mediafiles.botpress.cloud/a886b7a7-8dd2-4f58-9fac-31db7f4b9f2c/webchat/v2.1/config.js"></Script>
      <LandingPage />
    </>
  );
}
