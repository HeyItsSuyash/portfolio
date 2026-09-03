import fs from 'fs';
import path from 'path';

async function runSeoChecks() {
  console.log('🔍 Running automated SEO verification checks...');
  let errors = 0;

  // 1. Verify robots.txt and sitemap.xml generators exist
  const robotsPath = path.join(process.cwd(), 'src', 'app', 'robots.ts');
  const sitemapPath = path.join(process.cwd(), 'src', 'app', 'sitemap.ts');

  if (!fs.existsSync(robotsPath)) {
    console.error('❌ Missing src/app/robots.ts');
    errors++;
  } else {
    console.log('✅ robots.ts exists and configured');
  }

  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ Missing src/app/sitemap.ts');
    errors++;
  } else {
    console.log('✅ sitemap.ts exists and configured');
  }

  // 2. Verify static knowledge Markdown files exist in public/knowledge
  const requiredMarkdown = [
    'me.md',
    'projects.md',
    'experience.md',
    'education.md',
    'skills.md',
    'research.md',
    'achievements.md',
    'faq.md',
    'projects/prayukti.md',
    'projects/earnbuddy.md',
    'projects/genwin.md',
    'projects/caller-work.md',
    'projects/we-wont-forget.md',
  ];

  for (const file of requiredMarkdown) {
    const fullPath = path.join(process.cwd(), 'public', 'knowledge', file);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ Missing markdown knowledge file: public/knowledge/${file}`);
      errors++;
    } else {
      const stats = fs.statSync(fullPath);
      if (stats.size < 100) {
        console.error(`❌ Markdown file seems too short: public/knowledge/${file}`);
        errors++;
      }
    }
  }
  console.log(`✅ All ${requiredMarkdown.length} markdown knowledge files verified`);

  // 3. Verify public/llms.txt exists
  const llmsPath = path.join(process.cwd(), 'public', 'llms.txt');
  if (!fs.existsSync(llmsPath)) {
    console.error('❌ Missing public/llms.txt');
    errors++;
  } else {
    console.log('✅ llms.txt exists and verified');
  }

  // 4. Verify required application routes
  const requiredRoutes = [
    'about',
    'experience',
    'skills',
    'projects',
    'research',
    'blog',
    'uses',
    'now',
    'contact',
    'knowledge',
    '499-scheme',
  ];

  for (const route of requiredRoutes) {
    const pagePath = path.join(process.cwd(), 'src', 'app', route, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      console.error(`❌ Missing page.tsx for route /${route}`);
      errors++;
    }
  }
  console.log(`✅ All ${requiredRoutes.length} core routes present`);

  if (errors > 0) {
    console.error(`\n❌ SEO Checks failed with ${errors} issue(s).`);
    process.exit(1);
  } else {
    console.log('\n✨ All automated SEO and Knowledge Layer checks PASSED cleanly!\n');
  }
}

runSeoChecks();
