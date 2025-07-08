import styles from './PostList.module.scss';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { defaultPostsData } from '../../entities/post/constants.ts';
import { useCallback, useEffect, useState } from 'react';
import type { VisibleComments } from '../../entities/post/types/types.ts';

export const PostList = () => {
  const posts = defaultPostsData;

  const [visibleComments, setVisibleComments] = useState<VisibleComments>({});

  const toggleComments = useCallback((postId: string) => {
    setVisibleComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  }, []);

  useEffect(() => {
    // Для будущего получения данных по api
  }, []);

  return (
    <div className={styles.postListWrapper}>
      <h2 className={styles.postListHeader}>Post List:</h2>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            showComments={visibleComments[post.id]}
            toggleComments={toggleComments}
          />
        ))}
      </ul>
    </div>
  );
};
