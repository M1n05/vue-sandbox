export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetcher = async (): Promise<Post[]> =>
  await fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
