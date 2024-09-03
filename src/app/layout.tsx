"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from './lib/utils';
import Popps from 'next/font/local';
import './globals.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { DataProvider } from './contexts/data';
import { Viewport } from 'next';

const Poppins = Popps({ src: './assets/fonts/Poppins/Poppins-Regular.ttf' });

const metaDetails: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'LittleQueenPhotography : Votre photographe boudoir à Rouen',
    description: 'Des portraits intimistes alliant douceur et sensualité',
  },
  '/mentionslegales': {
    title: 'Mentions légales - LittleQueenPhotography',
    description: 'Consultez les mentions légales de LittleQueenPhotography.',
  },
  '/contact': {
    title: 'Contact - LittleQueenPhotography',
    description: 'Contactez-nous pour un devis',
  },
  '/portfolio': {
    title: 'Portfolio - LittleQueenPhotography',
    description: 'Vous pouvez trouver ici une partie de notre portfolio',
  },
  '/about': {
    title: 'À propos de nous - LittleQueenPhotography',
    description: 'Venez me découvrir et n\'hésitez pas à me contacter',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { title, description } = metaDetails[pathname] || {};
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }
  }, [pathname, title, description]);
  return (
    <html lang="fr">
      <body className={cn(`${Poppins.className} bg-black antialiased font-medium`)}>
        <DataProvider>
          <Provider store={store}>
            <Header />
            {children}
            <Footer />
          </Provider>
        </DataProvider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 1,
  userScalable: false,
};

