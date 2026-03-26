'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import NavbarHotel from '@/components/users/navbarHotel';
import HotelsPage from '@/components/users/hotelsPage'
function Page() {
  const searchParams = useSearchParams();

  // These come from the landing page form
  const [query, setQuery] = useState(searchParams.get('location') || '');
  const type = searchParams.get('type') || '';
  const price = searchParams.get('price') || '';
  const limit = Number(searchParams.get('limit') ) || 20;
  return (
    <>
      <NavbarHotel query={query} setQuery={setQuery} />
      <HotelsPage query={query} type={type} price={price}  limit={limit}/>
    </>
  )
}

export default Page