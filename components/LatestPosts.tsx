import Link from 'next/link'
import { newsletters } from '@/data/newsletters'

export default function LatestPosts() {
  const latestNewsletters = newsletters.slice(0, 3)

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Newsletters
          </h2>
          <p className="text-lg text-gray-600">
            Check out our most recent editions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestNewsletters.map((newsletter) => (
            <Link
              key={newsletter.id}
              href={`/newsletter/${newsletter.slug}`}
              className="group"
            >
              <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 h-full flex flex-col border border-gray-100">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {newsletter.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {newsletter.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <time dateTime={newsletter.date}>
                    {new Date(newsletter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="text-primary-600 group-hover:translate-x-1 transition-transform inline-block">
                    Read more →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/archive" className="btn-secondary inline-block">
            View All Newsletters
          </Link>
        </div>
      </div>
    </section>
  )
}



