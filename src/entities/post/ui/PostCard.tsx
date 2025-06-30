import styles from './PostCard.module.css';
import type { TPostData } from '../../../widgets/PostList/types.ts';

interface IPostCard {
  postData: TPostData;
}

export const PostCard = ({ postData }: IPostCard) => {
  return (
    <article className={styles.postCard}>
      <h3>{postData.header}</h3>
      <p>{postData.postBody}</p>
    </article>
  );
};
