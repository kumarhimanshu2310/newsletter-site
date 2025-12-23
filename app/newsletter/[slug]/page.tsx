import { newsletters } from '@/data/newsletters'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return newsletters.map((newsletter) => ({
    slug: newsletter.slug,
  }))
}

export default function NewsletterPost({ params }: { params: { slug: string } }) {
  const newsletter = newsletters.find((n) => n.slug === params.slug)

  if (!newsletter) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/archive"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 group"
      >
        <svg
          className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Archive
      </Link>

      <article className="bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {newsletter.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime={newsletter.date}>
              {new Date(newsletter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{newsletter.readTime} min read</span>
          </div>
          {newsletter.tags && newsletter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {newsletter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: newsletter.content }} />
        </div>
      </article>

      <div className="mt-12 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 text-center border border-primary-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Enjoyed this newsletter?
        </h3>
        <p className="text-gray-600 mb-6">
          Subscribe to get the latest updates delivered to your inbox
        </p>
        <Link href="/#subscribe" className="btn-primary inline-block">
          Subscribe Now
        </Link>
      </div>
    </div>
  )
}



