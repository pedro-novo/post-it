import type { Post } from "@prisma/client";
import { db } from "@/db";

export type PostItemType = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

// export type PostItemType = Awaited<ReturnType<typeof fetchPostsByTopicSlug>>[number];

export function fetchPostsBySearchTerm(term: string): Promise<PostItemType[]> {
  return db.post.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    where: {
      title: { contains: term },
      content: { contains: term },
    },
  });
}

export function fetchPostsByTopicSlug(slug: string): Promise<PostItemType[]> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}

export function fetchTopPosts(): Promise<PostItemType[]> {
  return db.post.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
}
