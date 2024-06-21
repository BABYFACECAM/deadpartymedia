import { Container } from "@/components/container";
import Hero from "@/components/hero";
import FeaturedPost from "@/components/featured-post";
import ArticleSection from "@/components/posts/article-section";

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col  justify-between p-24">
        <Hero />
        <FeaturedPost />
        <Container className="my-8 md:bd-10 lg:mb-16">
          {/*<ArticleSection category="Hip-Hop" title="Hip-Hop" />
          <ArticleSection category="Rock" title="Rock" />
          <ArticleSection category="Country" title="Country" />
          <ArticleSection category="EDM" title="EDM" />
          <ArticleSection category="Local Spotlight" title="Local Spotlight" />*/}
        </Container>
      </main>
    </>
  );
}
