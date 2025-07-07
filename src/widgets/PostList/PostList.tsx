import styles from './PostList.module.css';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { defaultPostsData } from './constants.ts';
import { useEffect } from 'react';

export const PostList = () => {
  const posts = defaultPostsData;

  useEffect(() => {
    // Для будущего получения данных по api
  }, []);

  return (
    <>
      <h2 className={styles.postListHeader}>Post List:</h2>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};
