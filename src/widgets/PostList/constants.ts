import type { PostProps } from './types.ts';

export const defaultPostsData: PostProps[] = Array.from(
  { length: 12 },
  (_, index) => {
    return {
      number: index + 1,
      id: `Post#${index + 1}`,
      header: `Default Post #${index + 1}`,
      postBody: `This is Default Post ${index + 1} text body`,
    };
  }
);
