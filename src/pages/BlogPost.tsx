import { Link, useParams } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { getBlogPostBySlug } from '../data/blog';
import { BOOKING_URL } from '../data/content';
import { trackBookingClick } from '../utils/analytics';

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <>
        <title>Post Not Found | Austin Baby Rentals Blog</title>

        <section className="py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-text mb-4">Post Not Found</h1>
            <p className="text-text-light mb-8">
              We could not find the blog post you are looking for. It may have been moved or removed.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-coral font-semibold hover:text-coral-dark no-underline transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    description: post.description,
    publisher: {
      '@type': 'Organization',
      name: 'Austin Baby Rentals',
    },
  };

  return (
    <>
      <title>{post.title} | Austin Baby Rentals Blog</title>
      <meta name="description" content={post.description} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      <meta property="og:type" content="article" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-sage-light py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sage-dark hover:text-coral text-sm font-medium no-underline transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-text mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-text-light text-sm mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 bg-white text-sage-dark text-xs font-medium px-2.5 py-1 rounded-full"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <article>
            {/* Intro paragraphs */}
            <div className="mb-8">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-text-light leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sections */}
            {post.sections.map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-2xl font-bold text-text mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j} className="text-text-light leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-10 bg-sage-light rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Planning Your Austin Trip?</h3>
            <p className="text-text-light mb-4">
              Book your baby gear now and cross one thing off the list. We deliver to anywhere in Austin.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick(`blog_${post.slug}`)}
              className="inline-block bg-coral hover:bg-coral-dark text-white font-semibold px-6 py-3 rounded-full no-underline transition-colors"
            >
              Book Your Gear
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
