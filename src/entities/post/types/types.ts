export type PostCommentProps = {
  id: string;
  commentText: string;
  author: string;
  date: Date;
};

export type PostProps = {
  number: number;
  id: string;
  title: string;
  postBody: string;
  comments: PostCommentProps[];
};

export type VisibleComments = Record<string, boolean>;
