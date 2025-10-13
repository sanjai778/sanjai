// app/components/BlogList.js

"use client";

import React, { useState, useMemo } from 'react';
import useDebounce from '../hooks/useDebounce'; // Your existing hook

// --- Child Components (Memoized for Performance) ---

const Highlight = React.memo(function Highlight({ text, highlight }) {
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

const PostCard = React.memo(function PostCard({ post, highlight }) {
  const createExcerpt = (html, length) => {
    if (!html) return '';
    const text = html.replace(/<[^>]+>/g, '');
    return text.length <= length ? text : text.substring(0, length) + '...';
  };

  const imageUrl = post.featured_image_url ? `/uploads/${post.featured_image_url}` : null;

  return (
    <div style={{
      border: '1px solid #ddd', borderRadius: '8px', padding: '20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', flex: '1 1 calc(33.333% - 16px)',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column'
    }}>
      {imageUrl && (
        <img src={imageUrl} alt={post.post_title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '15px' }}/>
      )}
      <div style={{ flexGrow: 1 }}>
        <h2 style={{ marginTop: 0, fontSize: '1.2em' }}>
          <Highlight text={post.post_title} highlight={highlight} />
        </h2>
        <p style={{ fontStyle: 'italic', color: '#555', fontSize: '0.9em' }}>
          Published on: {new Date(post.post_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p>{createExcerpt(post.post_content, 100)}</p>
      </div>
      <a href={`/blogs/${post.post_name}`} style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold', marginTop: 'auto' }}>Read More &rarr;</a>
    </div>
  );
});


// --- Main Interactive Component ---

export default function BlogList({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredPosts = useMemo(() => {
    if (!debouncedSearchQuery) return posts;
    return posts.filter(post =>
      post.post_title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [posts, debouncedSearchQuery]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ position: 'relative', marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to page 1 on new search
          }}
          style={{ width: '100%', padding: '10px 30px 10px 10px', fontSize: '1em', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box' }}
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} style={{
            position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2em', color: '#888'
          }}>
            &times;
          </button>
        )}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {currentPosts.length > 0 ? (
          currentPosts.map(post => <PostCard key={post.ID} post={post} highlight={debouncedSearchQuery} />)
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
