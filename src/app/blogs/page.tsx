// app/blogs/page.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList'; // Import the new client component
import { Blog } from '@/entity/Blog';

// --- Data Fetching on the Server ---
async function getPosts(): Promise<Blog[]> {
  try {
    // Use the absolute URL of your API. Revalidate to get new posts periodically.
    const response = await fetch('http://localhost:3000/api/blogs', { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch posts.');
    }

    const result: Blog[] = await response.json();

    return result;
  } catch (err) {
    console.error('Error fetching posts:', err);
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
