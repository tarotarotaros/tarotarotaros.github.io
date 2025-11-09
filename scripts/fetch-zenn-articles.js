import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ZENN_USERNAME = 'tarotarotaros';
const OUTPUT_PATH = join(__dirname, '..', 'public', 'zenn-articles.json');

async function fetchZennArticles() {
  try {
    const response = await fetch(`https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest`);

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const data = await response.json();

    // 最新3件の記事を取得
    const articles = data.articles.slice(0, 3).map(article => ({
      id: article.id,
      title: article.title,
      emoji: article.emoji,
      published_at: article.published_at,
      path: article.path,
      liked_count: article.liked_count
    }));

    // JSONファイルに保存
    writeFileSync(OUTPUT_PATH, JSON.stringify(articles, null, 2), 'utf-8');

    console.log(`✅ Successfully fetched ${articles.length} articles`);
    console.log(`📝 Saved to: ${OUTPUT_PATH}`);

    return articles;
  } catch (error) {
    console.error('❌ Error fetching Zenn articles:', error.message);
    process.exit(1);
  }
}

fetchZennArticles();
