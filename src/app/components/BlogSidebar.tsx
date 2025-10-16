import Link from 'next/link';
import styles from './BlogSidebar.module.css';

const recentPosts = [
  { id: 1, title: 'Beyond Security: Benefits of Implementing a Digital Gate Pass...', slug: '#' },
  { id: 2, title: 'Enhanced Mega Alerts (Emergency Notifications) for Proactive Workplace...', slug: '#' },
  { id: 3, title: 'The Rise of the Digital Reception: How Touchless, Integrated Systems Are...', slug: '#' },
];

const categories = [
  { id: 1, name: 'Articles', slug: '#' },
  { id: 2, name: 'Features', slug: '#' },
  { id: 3, name: 'How tos', slug: '#' },
  { id: 4, name: 'News', slug: '#' },
  { id: 5, name: 'Tips', slug: '#' },
  { id: 6, name: 'Uncategorized', slug: '#' },
];

export default function BlogSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_widget}>
        <h3 className={styles.sidebar_title}>Recent Posts</h3>
        <ul className={styles.sidebar_list}>
          {recentPosts.map(post => (
            <li key={post.id} className={styles.sidebar_list_item}>
              <Link href={`/blogs/${post.slug}`} className={styles.sidebar_link}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sidebar_widget}>
        <h3 className={styles.sidebar_title}>Categories</h3>
        <ul className={styles.sidebar_list}>
          {categories.map(category => (
            <li key={category.id} className={styles.sidebar_list_item}>
              <Link href={`/categories/${category.slug}`} className={styles.sidebar_link}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
