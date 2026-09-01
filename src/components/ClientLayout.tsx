'use client';

import Link from 'next/link';
import CustomCursor from "@/components/CustomCursor";
import Nav from '@/components/Nav';
import LoadingScreen from '@/components/LoadingScreen';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Nav />
      {children}
    </>
  );
}



