// app/components/BlogList.js
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from '../blogs/blogs.module.css';
import NewPagination from './NewPagination';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
  featuredImage: string | null;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}


export default function BlogList({ posts, categories }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.categories.some(cat => cat.name === selectedCategory);
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchTerm]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.search_bar}
      />

      {/* Category Filters */}
      <div className={styles.category_filters}>
        <button 
          onClick={() => setSelectedCategory('All')} 
          className={`${styles.category_button} ${selectedCategory === 'All' ? styles.active : ''}`}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category.id} 
            onClick={() => setSelectedCategory(category.name)}
            className={`${styles.category_button} ${selectedCategory === category.name ? styles.active : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className={styles.blog_grid}>
        {paginatedPosts.map(post => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className={styles.blog_card}>
            {post.featuredImage && (
              <img src={post.featuredImage} alt={post.title} className={styles.card_image} />
            )}
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>
                {post.title}
              </h2>
              <p className={styles.card_date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
                })}
              </p>
              <div className={styles.card_excerpt}>
                {post.content ? post.content.replace(/<[^>]*>?/gm, '') : ''}
              </div>
              <span className={styles.read_more_btn}>
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <NewPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
