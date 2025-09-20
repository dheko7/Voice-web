import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VoiceAI para Peluquerías - Asistentes de IA que Aumentan tus Citas</title>
        <meta name="description" content="Revoluciona tu peluquería con asistentes de voz y chat IA. Atiende llamadas 24/7, agenda citas automáticamente y aumenta tus ingresos un 40%. Demo gratuita." />
        <meta name="keywords" content="IA peluquería, asistente voz, chatbot WhatsApp, automatización salón, citas automáticas, IA España" />
        <meta name="author" content="VoiceAI para Peluquerías" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voiceai-peluquerias.com/" />
        <meta property="og:title" content="VoiceAI para Peluquerías - Asistentes de IA que Aumentan tus Citas" />
        <meta property="og:description" content="Revoluciona tu peluquería con asistentes de voz y chat IA. Atiende llamadas 24/7, agenda citas automáticamente y aumenta tus ingresos un 40%." />
        <meta property="og:image" content="https://voiceai-peluquerias.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://voiceai-peluquerias.com/" />
        <meta property="twitter:title" content="VoiceAI para Peluquerías - Asistentes de IA que Aumentan tus Citas" />
        <meta property="twitter:description" content="Revoluciona tu peluquería con asistentes de voz y chat IA. Atiende llamadas 24/7, agenda citas automáticamente y aumenta tus ingresos un 40%." />
        <meta property="twitter:image" content="https://voiceai-peluquerias.com/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "VoiceAI para Peluquerías",
              "description": "Asistentes de IA para automatizar peluquerías y aumentar citas",
              "url": "https://voiceai-peluquerias.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "129",
                "priceCurrency": "EUR",
                "priceValidUntil": "2024-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "500"
              }
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
