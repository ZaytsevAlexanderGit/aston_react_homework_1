import styles from './CommentList.module.scss';
import type { PostProps } from '../../entities/post/types/types.ts';

type CommentListProps = {
  post: PostProps;
};

export function CommentList({ post }: CommentListProps) {
  return (
    <ul className={styles.commentsBlock}>
      {post.comments.map((comment) => (
        <li className={styles.commentsBlock__comment} key={comment.id}>
          <p className={styles.commentsBlock__comment_text}>
            {comment.commentText}
          </p>
          <div className={styles.commentsBlock__comment_other}>
            <p>{comment.author}</p>
            <p>
              {comment.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
