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
      <body>{children}</body>
    </html>
  );
}
