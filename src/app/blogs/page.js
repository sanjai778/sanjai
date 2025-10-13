// app/blogs/page.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList'; // Import the new client component

// --- Data Fetching on the Server ---
async function getPosts() {
  try {
    // Use the absolute URL of your API. Revalidate to get new posts periodically.
    const response = await fetch('http://localhost:3000/api/posts', { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch posts.');
    }

    const result = await response.json();

    if (result.success) {
      // Ensure no duplicates before returning
      return Array.from(new Map(result.data.map(post => [post.ID, post])).values());
    } else {
      throw new Error(result.error || 'An API error occurred.');
    }
  } catch (err) {
    console.error(err);
    return []; // Return an empty array on error so the page doesn't crash
  }
}


// --- The Main Page (Server Component) ---
export default async function BlogsPage() {
  // Data is fetched here, on the server, at build time or when revalidating.
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>My Blog</h1>
        
        {/* Render the interactive component, passing the static data as a prop */}
        <BlogList posts={posts} />
        
      </main>
      <Footer />
    </>
  );
}