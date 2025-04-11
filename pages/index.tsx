import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface TimeDate {
  time: string;
  date: string;
}

const useDateTime = (): TimeDate => {
  const [dateTime, setDateTime] = useState<TimeDate>({
    time: '',
    date: ''
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      
      const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      setDateTime({ time: timeString, date: dateString });
    };

    // Update immediately
    updateDateTime();
    
    // Update every second
    const timer = setInterval(updateDateTime, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return dateTime;
};

const Home: NextPage = () => {
  const { time, date } = useDateTime();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Day Marker</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A dashboard for daily activities" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Day Marker
        </h1>

        <p className="mt-3 text-2xl">
        <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">What are we doing today?</code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Today Is: &rarr;</h3>
            <p className="mt-4 text-xl">
              {date}
            </p>
            <p className="mt-2 text-xl">
              {time}
            </p>
          </div>

          <div
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Right now it's: &rarr;</h3>
            <p className="mt-4 text-xl">
              weather conditions
            </p>
          </div>

          <div
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Count Down Timer: &rarr;</h3>
            <p className="mt-4 text-xl">
              until(time to leave)
            </p>
          </div>

          <div
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Traffic Status: &rarr;</h3>
            <p className="mt-4 text-xl">
              Route based on traffic data from google maps or waze or nyc dot api
            </p>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by Next13 {'||'} <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hosted on{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
