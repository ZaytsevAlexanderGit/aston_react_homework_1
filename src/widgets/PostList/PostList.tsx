import styles from './PostList.module.css';
import type { TPostData } from './types.ts';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';

interface IPostList {
  posts: TPostData[];
}

export const PostList = ({ posts }: IPostList) => {
  return (
    <>
      <h2 className={styles.postListHeader}>Post List:</h2>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <PostCard key={post.id} postData={post} />
        ))}
      </ul>
    </>
  );
};
