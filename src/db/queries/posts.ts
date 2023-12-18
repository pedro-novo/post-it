import type { Post } from "@prisma/client";
import { db } from "@/db";

export type PostItemType = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

// export type PostItemType = Awaited<ReturnType<typeof fetchPostsByTopicSlug>>[number];

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
