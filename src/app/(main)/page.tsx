import { Metadata } from 'next';
import React, { Suspense } from 'react';
import PageContext from './(blocks)/PageContext';

export const metadata: Metadata = {
    title: 'هوشیوا hooshiva',
    description: 'hoshiva هوشیوا ساخت سند با هوش مصنوعی'
};

const Page = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Suspense fallback={<div>Loading...</div>}>
        <PageContext />
    </Suspense>
  );
};

export default Page;
