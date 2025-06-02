'use client';

import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import SectionTitle from '@/components/common/layout/section/SectionTitle';
import Loading from '@/app/loading';
import PrimaryCarousel from '@/components/common/dataDisplay/carousel/PrimaryCarousel';

interface EventDate {
  month: string;
  day: number;
  year: number;
}

interface Event {
  id: string;
  title: string;
  images: string[];
  date: EventDate;
  [key: string]: unknown;
}

const Page = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const docRef = doc(db, 'eventPage', '1739374541531'); // Reference Firestore document
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          throw new Error('No such document!');
        }

        const data = docSnap.data();
        setEvents(data.events || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Function to compare dates (to sort events by date)
  const compareDate = (a: EventDate, b: EventDate): number => {
    const monthOrder: { [key: string]: number } = {
      January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
      July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
    };

    if (a.year !== b.year) return a.year - b.year;
    if (monthOrder[a.month] !== monthOrder[b.month]) {
      return monthOrder[a.month] - monthOrder[b.month];
    }
    return a.day - b.day;
  };

  // Sort events by date
  const sortedEvents = events.sort((a, b) => compareDate(b.date, a.date));

  const formatDate = (date: EventDate): string => `${date.month}, ${date.day}, ${date.year}`;

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='bg-[#ffeee2]'>
      <SectionTitle title="events" />
      <div className="max-w-screen-xl m-auto flex justify-center flex-wrap px-1 gap-6 py-12">
        {sortedEvents.map((event) => (
          <div
            key={event.id || Math.random().toString(36).substr(2, 9)}
            className="flex flex-col gap-4 sm:w-80 lg:w-96 p-4 bg-orange-500 border border-primary rounded-2xl hover:shadow-xl cursor-pointer"
          >
            <div className="w=full flex flex-col items-center">
              <h1 className="font-roboto font-bold text-lg text-white">{event.title}</h1>
              <h1 className="font-roboto text-lg text-white">{formatDate(event.date)}</h1>
            </div>
            <div className="w=full event-card">
              <PrimaryCarousel slides={event.images} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
