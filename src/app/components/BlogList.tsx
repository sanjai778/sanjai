// app/components/BlogList.js

"use client";

import React, { useState, useMemo } from 'react';
import useDebounce from '../hooks/useDebounce'; // Your existing hook

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

interface HighlightProps {
  text: string;
  highlight: string;
}

// --- Child Components (Memoized for Performance) ---

const Highlight: React.FC<HighlightProps> = React.memo(function Highlight({ text, highlight }) {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
      )}
    </span>
  );
});

interface PostCardProps {
  post: Post;
  highlight: string;
}

const PostCard: React.FC<PostCardProps> = React.memo(function PostCard({ post, highlight }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
  };

  const imageUrl = post.featuredImage;

  return (
    <div style={{
      border: '1px solid #eee', borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      height: '100%'
    }}>
      {imageUrl && (
        <img src={imageUrl} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
      )}
      <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ marginTop: 0, fontSize: '1.1em', marginBottom: '10px' }}>
          <Highlight text={post.title} highlight={highlight} />
        </h2>
        <p style={{ color: '#777', fontSize: '0.9em', marginTop: 'auto' }}>
          {formatDate(post.date)}
        </p>
      </div>
    </div>
  );
});


// --- Main Interactive Component ---

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(6);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (debouncedSearchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(post =>
        post.categories.some(cat => cat.name === selectedCategory)
      );
    }

    return filtered;
  }, [posts, debouncedSearchQuery, selectedCategory]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <input
          type="text"
          placeholder="Search ..."
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to page 1 on new search
          }}
          style={{ width: '50%', padding: '12px 20px', fontSize: '1em', borderRadius: '25px', border: '1px solid #ddd', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <a href="#" onClick={() => setSelectedCategory(null)} style={{ textDecoration: 'none', color: '#555', padding: '8px 16px', fontWeight: selectedCategory === null ? 'bold' : 'normal' }}>
          All
        </a>
        {categories.map(category => (
          <a key={category.id} href="#" onClick={() => setSelectedCategory(category.name)} style={{ textDecoration: 'none', color: '#555', padding: '8px 16px', fontWeight: selectedCategory === category.name ? 'bold' : 'normal' }}>
            {category.name}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {currentPosts.length > 0 ? (
          currentPosts.map(post => (
            <a key={post.id} href={`/blogs/${post.slug}`} style={{ 
              textDecoration: 'none', 
              color: 'inherit', 
              flex: '1 1 calc(33.333% - 24px)',
              boxSizing: 'border-box'
            }}>
              <PostCard post={post} highlight={debouncedSearchQuery} />
            </a>
          ))
        ) : (
          <p style={{ width: '100%', textAlign: 'center' }}>No posts found.</p>
        )}
      </div>

      {filteredPosts.length > postsPerPage && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} style={{
            padding: '10px 20px', margin: '0 5px', cursor: 'pointer', borderRadius: '4px',
            border: '1px solid #ddd', background: currentPage === 1 ? '#f0f0f0' : 'white'
          }}>
            Previous
          </button>
          <span style={{ margin: '0 10px' }}>Page {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}</span>
          <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastPost >= filteredPosts.length} style={{
            padding: '10px 20px', margin: '0 5px', cursor: 'pointer', borderRadius: '4px',
            border: '1px solid #ddd', background: indexOfLastPost >= filteredPosts.length ? '#f0f0f0' : 'white'
          }}>
            Next
          </button>
        </div>
      )}
    </>
  );
}
