// app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PP | Top 10 Searches',
  description: 'Learn about Phantom Pyli, the curious researcher behind the blogs.',
};

export default function Top10Searches() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">
         Top 10 Searches on 
      </h1>

    </div>
  );
}
