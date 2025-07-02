import type { FC } from 'react';
import styles from './PostCard.module.css';
import type { PostProps } from '../../../widgets/PostList/types.ts';

type PostCardProps = {
  post: PostProps;
};

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <article className={styles.postCard}>
      <h3>{post.header}</h3>
      <p>{post.postBody}</p>
    </article>
  );
};
