import Link from 'next/link'
import { newsletters } from '@/data/newsletters'

export default function Archive() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Newsletter Archive
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Browse all past editions of the newsletter
      </p>

      <div className="space-y-8">
        {newsletters.map((newsletter) => (
          <Link
            key={newsletter.id}
            href={`/newsletter/${newsletter.slug}`}
            className="block group"
          >
            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-8 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {newsletter.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{newsletter.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
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
                </div>
                <div className="ml-4 text-primary-600 group-hover:translate-x-1 transition-transform">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
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
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}



