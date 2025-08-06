// app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Top 10 Searches',
  description: 'Learn about Phantom Pyli, the curious researcher behind the blogs.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">
        About Top 10 Searches
      </h1>

      <p className="text-lg mb-6 leading-relaxed">
        👋 Hey there! I'm <strong>Phantom Pyli</strong> — a curious researcher, storyteller, and the creator of this blog. I love diving deep into topics that intrigue me — be it people, movies, theories, or unsolved questions — and sharing well-structured insights in an engaging way.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        This blog is where I break down complex topics into fun and digestible stories, often backed by data, facts, and a touch of wonder. Whether it’s a bizarre conspiracy, a hidden historical thread, or a cinematic breakdown — I’m here to explore it, and you're invited.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        Every post is part of my journey as a researcher and YouTuber — turning questions into quests. If you're someone who loves thought-provoking content, you're in the right place.
      </p>

    

      <p className="text-center text-sm text-gray-500 mt-8">
        Powered by curiosity. Crafted with Next.js ✨
      </p>
    </div>
  );
}
