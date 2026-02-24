import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  return (
    <>
      <title>Austin Baby Rentals Blog | Family Travel Tips</title>
      <meta
        name="description"
        content="Tips and guides for traveling to Austin with babies and toddlers. From SXSW to ACL, learn how to make your family trip easy with baby gear rental."
      />

      {/* Hero */}
      <section className="bg-sage-light py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Blog</h1>
          <p className="text-text-light max-w-xl mx-auto">
            Austin family travel tips, gear guides, and insider advice from a local mom
            who has done it all with kids in tow.
          </p>
        </div>
      </section>

      {/* Blog post grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow no-underline group flex flex-col"
              >
                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-text-light text-sm mb-3">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-text group-hover:text-coral transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-text-light text-sm leading-relaxed mb-4 flex-1">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-sage-light text-sage-dark text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <span className="text-coral font-semibold text-sm group-hover:text-coral-dark transition-colors">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
