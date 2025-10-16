// src/app/blogs/[slug]/page.js

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogSidebar from '../../components/BlogSidebar';
import SubPageTitle from '../../components/SubPageTitle';
import styles from './blog-post.module.css';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
  featuredImage: string | null;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/blogs/${slug}`, { next: { revalidate: 60 } });

    if (!response.ok) {
      return null;
    }

    const post: Post = await response.json();
    return post;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage;

  return (
    <>
      <Header />
      <SubPageTitle title={post.title} />
      <main className={styles.container}>
        <div className={styles.grid}>
          <article className={styles.main_content}>
            <Link href="/blogs" className={styles.back_link}>
              &larr; Back to All Posts
            </Link>
            
            {post.date && (
              <p className={styles.date}>
                Published on: {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
                })}
              </p>
            )}
            
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={post.title || 'Blog post image'} 
                className={styles.featured_image}
              />
            )}
            
            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content || '' }} 
            />
          </article>
          
          <BlogSidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}
