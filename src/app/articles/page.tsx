import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/lib/articles';
import { Metadata } from 'next';
import styles from './articles.module.css';
import ArticlesListJsonLd from '@/components/ArticlesListJsonLd';

type Props = {
  params: Promise<Record<string, string>>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// This function generates all possible tag routes at build time
export async function generateStaticParams() {
  const articles = await getAllArticles();

  // Get unique tags from all articles
  const allTags = articles.flatMap(article => article.metadata.tags || []);
  const uniqueTags = Array.from(new Set(allTags)).filter(tag => tag);

  // Generate params for 'all' and each specific tag
  return [
    { searchParams: {} }, // Default page (all)
    ...uniqueTags.map(tag => ({
      searchParams: { tag }
    }))
  ];
}

export async function generateMetadata(
  { searchParams }: Props
): Promise<Metadata> {
  // Get the tag from URL parameters
  const params = await searchParams;
  const tagParam = typeof params.tag === 'string' ? params.tag.toLowerCase() : 'all';

  // Base metadata
  const baseTitle = 'Expert Articles & Digital Garden | Kirill Markin';
  let title = baseTitle;
  let description = 'Browse curated insights on technology, strategy, and personal development. Practical knowledge and proven solutions in this structured digital garden of interconnected ideas.';

  // Tag-specific metadata
  if (tagParam !== 'all') {
    const formattedTag = tagParam.charAt(0).toUpperCase() + tagParam.slice(1);

    // Count articles with this tag
    const articles = await getAllArticles();
    const tagArticles = articles.filter(article =>
      article.metadata.tags && article.metadata.tags.includes(tagParam)
    );
    const articlesCount = tagArticles.length;

    title = `${formattedTag} Articles [${articlesCount}] | Expert Insights | Kirill Markin`;
    description = `Explore ${articlesCount} in-depth ${formattedTag} articles with practical insights, analysis, and solutions. Learn from Kirill Markin's expertise and real-world experience in ${tagParam}.`;
  }

  const canonicalUrl = tagParam === 'all'
    ? 'https://kirill-markin.com/articles/'
    : `https://kirill-markin.com/articles/?tag=${tagParam}`;

  // Images and other metadata
  const images = [
    {
      url: '/articles/articles-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Kirill Markin Articles',
    }
  ];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images,
      type: 'website',
      siteName: 'Kirill Markin',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/articles/articles-hero.webp'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const PLACEHOLDER_IMAGE = '/articles/placeholder.webp';

export default async function ArticlesPage({ searchParams }: Props) {
  const params = await searchParams;
  const tagParam = typeof params.tag === 'string' ? params.tag.toLowerCase() : 'all';

  const articles = await getAllArticles();

  // Filter articles based on tag if provided
  const filteredArticles = tagParam === 'all'
    ? articles
    : articles.filter(article =>
      article.metadata.tags && article.metadata.tags.includes(tagParam)
    );

  // Get all unique tags for the tag menu
  const allTags = articles.flatMap(article => article.metadata.tags || []);
  const uniqueTags = Array.from(new Set(allTags)).filter(tag => tag);

  const canonicalUrl = tagParam === 'all'
    ? 'https://kirill-markin.com/articles/'
    : `https://kirill-markin.com/articles/?tag=${tagParam}`;

  const getTagDescription = () => {
    if (tagParam === 'all') {
      return 'Welcome to my digital garden – a curated collection of interconnected notes, thoughts, and insights made available for public access. Unlike a traditional blog, this space represents a subset of my personal knowledge management system, with content organized through natural connections between ideas. Here you\'ll find research notes, technical discoveries, thought processes, and personal workflows. Explore by following the organic connections between topics or filter by tags to discover content that aligns with your interests.';
    }

    // Display tag with first letter capitalized in the description
    const formattedTag = tagParam.charAt(0).toUpperCase() + tagParam.slice(1);

    // Get count of articles with this tag
    const tagArticlesCount = filteredArticles.length;

    return `Articles tagged with "${formattedTag}" [${tagArticlesCount}]. These posts focus specifically on ${tagParam}-related topics and insights.`;
  };

  return (
    <div className={styles.content}>
      <ArticlesListJsonLd
        articles={filteredArticles}
        url={canonicalUrl}
        tag={tagParam !== 'all' ? tagParam : undefined}
      />

      <div className={styles.fullWidthColumn}>
        <div className={styles.articlesHeader}>
          <div className={styles.articlesHeaderTitle}>
            <h1 className={styles.articlesTitle}>
              {tagParam === 'all' ? (
                <>Article<span className={styles.glitchLetter}>s</span></>
              ) : (
                <>{tagParam.charAt(0).toUpperCase() + tagParam.slice(1)} Article<span className={styles.glitchLetter}>s</span></>
              )}
            </h1>
            <div className={styles.categoryDescription}>
              <p>{getTagDescription()}</p>
            </div>
          </div>
        </div>

        <nav className={styles.tagsMenu} aria-label="Article tags">
          <span>Tags</span>
          <div className={styles.tagsMenuItems}>
            <Link
              href="/articles/"
              className={`${styles.tagMenuItem} ${tagParam === 'all' ? styles.active : ''}`}
            >
              All
            </Link>

            {uniqueTags
              .map(tag => ({
                tag,
                count: articles.filter(article =>
                  article.metadata.tags && article.metadata.tags.includes(tag)
                ).length
              }))
              .sort((a, b) => b.count - a.count)
              .map(({ tag, count }) => (
                <Link
                  key={tag}
                  href={`/articles/?tag=${tag}`}
                  className={`${styles.tagMenuItem} ${tagParam === tag ? styles.active : ''}`}
                >
                  {tag} [{count}]
                </Link>
              ))}
          </div>
        </nav>

        <div className={styles.mediaMentions}>
          {filteredArticles.map((article, index) => {
            const isLarge = index === 0 || index === 5;
            const isVideo = article.metadata.isVideo || article.metadata.type?.toLowerCase() === 'video';

            return (
              <article
                key={article.slug}
                className={`${styles.mediaMention} ${isLarge ? styles.wide : ''} ${isVideo ? styles.video : ''} ${isLarge ? styles.wideWithThumbnail : ''}`}
              >
                <Link
                  href={`/articles/${article.slug}/`}
                  className={styles.mentionLink}
                >
                  <div className={styles.language}>
                    <div className={styles.text}>[{article.metadata.language || 'en'}]</div>
                  </div>

                  {article.metadata.type && (
                    <div className={styles.type}>
                      <div className={styles.text}>[{article.metadata.type}]</div>
                    </div>
                  )}

                  <div className={styles.thumbnailContainer}>
                    <Image
                      className={styles.thumbnail}
                      src={article.metadata.thumbnailUrl || PLACEHOLDER_IMAGE}
                      alt={article.metadata.title}
                      width={640}
                      height={360}
                      sizes="(max-width: 640px) 320px, (max-width: 1200px) 640px, 640px"
                      quality={75}
                      priority={index < 4}
                    />
                  </div>

                  <div className={styles.content}>
                    <h2 className={styles.title}>{article.metadata.title}</h2>

                    {article.metadata.description && (
                      <p className={styles.description}>{article.metadata.description}</p>
                    )}

                    <div className={styles.footer}>
                      <div className={styles.date}>
                        {article.metadata.date && (
                          <time dateTime={article.metadata.date}>
                            {new Date(article.metadata.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        )}
                      </div>

                      {article.metadata.achievementValue && article.metadata.achievementLabel && (
                        <div className={styles.achievement}>
                          <div className={styles.value}>{article.metadata.achievementValue}</div>
                          <div className={styles.label}>{article.metadata.achievementLabel}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
} 