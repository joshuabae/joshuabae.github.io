import { useParams, Link } from "wouter";
import { postsData } from "@/content/posts";
import { useMemo, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  const post = useMemo(() => postsData.find((p) => p.slug === slug), [slug]);

  // Redirect to external URL if the post lives on an external platform
  useEffect(() => {
    if (post?.externalUrl) {
      window.location.href = post.externalUrl;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-background" data-testid="post-not-found">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Post not found</h1>
          <Link href="/" className="inline-flex items-center gap-2 text-base font-semibold text-azure hover:text-azure/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-24 px-6 sm:px-12 pt-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/#writing" 
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-lavender transition-colors mb-12 group uppercase tracking-widest"
          data-testid="back-to-home"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={3} />
          All Writing
        </Link>

        <article data-testid="blog-post-content">
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-lavender/20 text-lavender rounded-lg text-sm font-bold tracking-widest uppercase mb-6">
              {post.date}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none 
            prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:text-[17px] sm:prose-p:text-[18px]
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
            prose-a:font-semibold prose-a:text-lavender prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-2 hover:prose-a:underline-offset-4
            prose-strong:font-bold prose-strong:text-foreground
            prose-blockquote:border-l-4 prose-blockquote:border-lavender prose-blockquote:bg-lavender/5 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-foreground/80 prose-blockquote:font-medium
            prose-ul:text-foreground/90 prose-ul:text-[17px] sm:prose-ul:text-[18px]
            prose-ol:text-foreground/90 prose-ol:text-[17px] sm:prose-ol:text-[18px]
            prose-li:my-2 prose-li:marker:text-lavender
          ">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}
