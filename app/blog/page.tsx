import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import postData from '../../data/blog/posts.json';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Prashan Fernando',
  description:
    'Welcome to my blog! I write about web development, software engineering, and other topics that interest me. If you have any questions or comments, feel free to reach out to me 🚀',
};

export default async function Page() {
  return (
    <>
      <div>
        <h1 className="mb-6 text-2xl font-medium tracking-tighter">Blog ✍️</h1>
        <p>
          Welcome to my blog! I write about web development, software engineering, and other topics that interest me. If you have
          any questions or comments, feel free to reach out to me on Twitter or LinkedIn. I&apos;d love to hear from you! 🚀
        </p>
        <div className="my-8 space-y-10">
          {postData.data?.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className="block w-full h-full space-y-2">
              <h2 className="text-lg font-medium tracking-normal">{post.data.title}</h2>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                <span>{format(parseISO(post.data.date), 'MMMM do, uuu')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
