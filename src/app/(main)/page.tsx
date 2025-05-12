import { Metadata } from 'next';
import React, { Suspense } from 'react';
import PageContext from './(blocks)/PageContext';

export const metadata: Metadata = {
    title: 'EasyWaySEO: SEO Coaching & DIY SEO Software',
    description: 'EasyWaySEO: SEO Coaching & DIY SEO Software'
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
