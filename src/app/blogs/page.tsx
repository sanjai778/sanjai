// app/blogs/page.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList'; // Import the new client component
import styles from './blogs.module.css';

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

// --- Data Fetching on the Server ---
async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch('http://localhost:3000/api/categories', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error('Failed to fetch categories.');
    }

    const categories: Category[] = await response.json();
    return categories;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getPosts(): Promise<Post[]> {
  try {
    // Use the absolute URL of your API. Revalidate to get new posts periodically.
    const response = await fetch('http://localhost:3000/api/blogs', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error('Failed to fetch posts.');
    }

    const posts: Post[] = await response.json();

    // Ensure no duplicates before returning
    return Array.from(new Map(posts.map(post => [post.id, post])).values());
  } catch (err) {
    console.error(err);
    return []; // Return an empty array on error so the page doesn't crash
  }
}


// --- The Main Page (Server Component) ---
export default async function BlogsPage() {
  // Data is fetched here, on the server, at build time or when revalidating.
  const posts = await getPosts();
  const categories = await getCategories();

  return (
    <>
      <Header />

      <main className={styles.container}>
          <h1 className={styles.title}>Explore Tips On Workspace Efficiency And Visitor Management</h1>
        {/* Render the interactive component, passing the static data as a prop */}
        <BlogList posts={posts} categories={categories} />
        
      </main>
      <Footer />
    </>
  );
}
