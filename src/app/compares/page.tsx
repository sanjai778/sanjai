"use client";

import { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CompareSearch from '@/app/components/CompareSearch';
import BestComparisons from '@/app/components/BestComparisons';
import NewPagination from '@/app/components/NewPagination';
import TestimonialSection from '../components/sections/TestimonialSection';

async function getCompares() {
  try {
    const response = await fetch('/api/compares', { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch compares.');
    }

    const compares = await response.json();
    return compares;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default function ComparesPage() {
  const [compares, setCompares] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    async function fetchData() {
      const data = await getCompares();
      setCompares(data);
    }
    fetchData();
  }, []);

  const filteredCompares = compares.filter((compare: any) =>
    compare.mainTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCompares.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCompares.length / itemsPerPage);

  return (
    <>
      <Header />
      <CompareSearch value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {currentItems.length > 0 ? (
          <>
            <BestComparisons data={currentItems} />
            <NewPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        ) : (
          <p style={{ textAlign: 'center' }}>No compares found.</p>
        )}
      </main>
       <TestimonialSection />
      <Footer />
    </>
  );
}
