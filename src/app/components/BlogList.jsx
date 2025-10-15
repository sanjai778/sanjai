// app/components/BlogList.js
"use client";
import React, { useState, useMemo } from 'react';
import useDebounce from '../hooks/useDebounce'; // Your existing hook
// --- Child Components (Memoized for Performance) ---
var Highlight = React.memo(function Highlight(_a) {
    var text = _a.text, highlight = _a.highlight;
    if (!highlight.trim()) {
        return <span>{text}</span>;
    }
    var regex = new RegExp("(".concat(highlight, ")"), 'gi');
    var parts = text.split(regex);
    return (<span>
      {parts.map(function (part, i) {
            return regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>;
        })}
    </span>);
});
var PostCard = React.memo(function PostCard(_a) {
    var post = _a.post, highlight = _a.highlight;
    var formatDate = function (dateString) {
        var date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
    };
    var imageUrl = post.featuredImage;
    return (<div style={{
            border: '1px solid #eee', borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            height: '100%'
        }}>
      {imageUrl && (<img src={imageUrl} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>)}
      <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ marginTop: 0, fontSize: '1.1em', marginBottom: '10px' }}>
          <Highlight text={post.title} highlight={highlight}/>
        </h2>
        <p style={{ color: '#777', fontSize: '0.9em', marginTop: 'auto' }}>
          {formatDate(post.date)}
        </p>
      </div>
    </div>);
});
export default function BlogList(_a) {
    var posts = _a.posts, categories = _a.categories;
    var _b = useState(''), searchQuery = _b[0], setSearchQuery = _b[1];
    var _c = useState(null), selectedCategory = _c[0], setSelectedCategory = _c[1];
    var _d = useState(1), currentPage = _d[0], setCurrentPage = _d[1];
    var postsPerPage = useState(6)[0];
    var debouncedSearchQuery = useDebounce(searchQuery, 300);
    var filteredPosts = useMemo(function () {
        var filtered = posts;
        if (debouncedSearchQuery) {
            filtered = filtered.filter(function (post) {
                return post.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
            });
        }
        if (selectedCategory) {
            filtered = filtered.filter(function (post) {
                return post.categories.some(function (cat) { return cat.name === selectedCategory; });
            });
        }
        return filtered;
    }, [posts, debouncedSearchQuery, selectedCategory]);
    var indexOfLastPost = currentPage * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    var currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    var paginate = function (pageNumber) { return setCurrentPage(pageNumber); };
    return (<>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <input type="text" placeholder="Search ..." value={searchQuery} onChange={function (e) {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to page 1 on new search
        }} style={{ width: '50%', padding: '12px 20px', fontSize: '1em', borderRadius: '25px', border: '1px solid #ddd', boxSizing: 'border-box' }}/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <a href="#" onClick={function () { return setSelectedCategory(null); }} style={{ textDecoration: 'none', color: '#555', padding: '8px 16px', fontWeight: selectedCategory === null ? 'bold' : 'normal' }}>
          All
        </a>
        {categories.map(function (category) { return (<a key={category.id} href="#" onClick={function () { return setSelectedCategory(category.name); }} style={{ textDecoration: 'none', color: '#555', padding: '8px 16px', fontWeight: selectedCategory === category.name ? 'bold' : 'normal' }}>
            {category.name}
          </a>); })}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {currentPosts.length > 0 ? (currentPosts.map(function (post) { return (<a key={post.id} href={"/blogs/".concat(post.slug)} style={{
                textDecoration: 'none',
                color: 'inherit',
                flex: '1 1 calc(33.333% - 24px)',
                boxSizing: 'border-box'
            }}>
              <PostCard post={post} highlight={debouncedSearchQuery}/>
            </a>); })) : (<p style={{ width: '100%', textAlign: 'center' }}>No posts found.</p>)}
      </div>

      {filteredPosts.length > postsPerPage && (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <button onClick={function () { return paginate(currentPage - 1); }} disabled={currentPage === 1} style={{
                padding: '10px 20px', margin: '0 5px', cursor: 'pointer', borderRadius: '4px',
                border: '1px solid #ddd', background: currentPage === 1 ? '#f0f0f0' : 'white'
            }}>
            Previous
          </button>
          <span style={{ margin: '0 10px' }}>Page {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}</span>
          <button onClick={function () { return paginate(currentPage + 1); }} disabled={indexOfLastPost >= filteredPosts.length} style={{
                padding: '10px 20px', margin: '0 5px', cursor: 'pointer', borderRadius: '4px',
                border: '1px solid #ddd', background: indexOfLastPost >= filteredPosts.length ? '#f0f0f0' : 'white'
            }}>
            Next
          </button>
        </div>)}
    </>);
}
