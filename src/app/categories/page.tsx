// src/app/categories/page.js

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Category {
  term_id: number;
  name: string;
  slug: string;
  count: number;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // THIS IS THE UPDATED URL
        const response = await fetch('/api/blogscategories');
        const result = await response.json();
        
        if (result.success) {
          setCategories(result.data);
        } else {
          throw new Error(result.error || 'Failed to fetch categories.');
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // ... rest of the component remains the same
  
  if (loading) return <p style={{ textAlign: 'center' }}>Loading categories...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Post Categories</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {categories.map(category => (
          <li key={category.term_id} style={{ marginBottom: '1rem' }}>
            <Link 
              href={`/categories/${category.slug}`} 
              style={{ 
                textDecoration: 'none', 
                color: '#0070f3', 
                fontSize: '1.2em',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px'
              }}
            >
              <span>{category.name}</span>
              <span style={{ backgroundColor: '#eee', padding: '0.2rem 0.5rem', borderRadius: '5px' }}>
                {category.count} {category.count === 1 ? 'post' : 'posts'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
