import '../src/styles/main.css';

export const metadata = {
  title: 'Maria C. Lima - AI Portfolio',
  description: 'Exploring the possibilities of artificial intelligence through practical applications.',
  keywords: ['AI', 'AI Portfolio', ' AI Engineer', 'Frontend Developer', 'JavaScript', 'React', 'automation'],
  authors: [{ name: 'Maria C. Lima' }],
  openGraph: {
    title: 'Maria C. Lima - AI Portfolio',
    description: 'Exploring the possibilities of artificial intelligence through practical applications..',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HDH90MLFDM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HDH90MLFDM');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
