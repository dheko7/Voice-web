import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Neurastyle | Recepcionista Virtual IA que agenda citas 24/7</title>
        <meta name="description" content="Nunca pierdas clientes por llamadas no atendidas. Con Neurastyle, tu asistente de voz con IA agenda citas automáticamente las 24 horas del día, por menos de 5 € al día. Solicita una demo gratuita." />
        <meta name="keywords" content="asistente de voz ia, recepcionista virtual, agenda automática, automatizar citas, peluquerías, clínicas dentales, fisioterapia, automatización reservas" />
        <meta name="author" content="Neurastyle" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neurastyle.vercel.app/" />
        <meta property="og:title" content="Neurastyle | Recepcionista Virtual IA que agenda citas 24/7" />
        <meta property="og:description" content="Nunca pierdas clientes por llamadas no atendidas. Con Neurastyle, tu asistente de voz con IA agenda citas automáticamente las 24 horas del día, por menos de 5 € al día." />
        <meta property="og:image" content="https://neurastyle.vercel.app/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://neurastyle.vercel.app/" />
        <meta property="twitter:title" content="Neurastyle | Recepcionista Virtual IA que agenda citas 24/7" />
        <meta property="twitter:description" content="Nunca pierdas clientes por llamadas no atendidas. Con Neurastyle, tu asistente de voz con IA agenda citas automáticamente las 24 horas del día, por menos de 5 € al día." />
        <meta property="twitter:image" content="https://neurastyle.vercel.app/og-image.jpg" />
        
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
              "name": "Neurastyle",
              "description": "Recepcionista Virtual IA que agenda citas 24/7",
              "url": "https://neurastyle.vercel.app",
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
