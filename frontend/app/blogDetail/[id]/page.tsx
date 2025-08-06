
import React from 'react';
import { Fragment } from 'react';
import { createServerSupabaseClient } from '@/backend/server'

function renderContentBlock(block: any, index: number) {
  switch (block.type) {
    case "header": {
      const HeaderTag = `h${block.data.level}`;
      return (
        <>
          {React.createElement(HeaderTag, { key: index }, block.data.text)}
          <br />
        </>
      );
    }
    case "paragraph":
      return (
        <>
          <p key={index}>{block.data.text}</p>
          <br />
        </>
      );
    case "list":
      if (block.data.style === "unordered") {
        return (
          <>
            <ul key={index}>
              {block.data.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <hr />
          </>
        );
      } else {
        return (
          <>
            <ol key={index}>
              {block.data.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <br />
          </>
        );
      }
    default:
      return null;
  }
}



const blogs1=[{    id: "1",
    title: "What if everyone is a creator?",
    description:
      "Nowadays, everyone is on Instagram posting their talents. Some people have real talent; others just do random stuff. Out of all this, the most random thing is people trying to motivate others to create content.",
    badges: ["Instagram"],
     imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    content:{
  "time": 1690000000000,
  "blocks": [
    
    {
      "type": "paragraph",
      "data": {
        "text": "Nowadays, everyone is on Instagram posting their talents. Some people have real talent; others just do random stuff. Out of all this, the most random thing is people trying to motivate others to create content."
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "How can they even say that? I'm just a normal person doing a boring IT job. I spend 10 hours on the computer doing average stuff. And now they're asking me to create content? Why should I? I work so I can live happily and enjoy my life. Do I have to work even more? No, I can't."
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "The problem is Instagram. Why is it suggesting this content to me? What happiness does Instagram get from it? I hope Instagram doesn't really know what my value is. If everyone decided to be a creator, who would buy their stuff? There need to be consumers too — like me. So Instagram, be a good boy and don't mess with me."
      }
    }
  ]
}},{  id: "2",
    title: "Need for Journalising",
    description:
      "Information overload is the overwhelming inability to process excessive amounts of data effectively, often leading to stress or confusion.",
    badges: ["Journal", "Producctivity"],
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  content: {
  "time": 1690000000000,
  "blocks": [
    
    {
      "type": "paragraph",
      "data": {
        "text": "Information overload is the overwhelming inability to process excessive amounts of data effectively, often leading to stress or confusion."
      }
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "🎭 Social Media Platforms",
          "🎥 Streaming Services",
          "🤖 AI-Generated Content",
          "📚 Online Education",
          "📰 News Outlets",
          "🎮 Gaming and Virtual Reality",
          "📢 Advertisements"
        ]
      }
    },
    {
      "type": "header",
      "data": {
        "text": "Why Journaling Matters 📔",
        "level": 3
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "A Space for Self-Reflection"
      }
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "Journaling helps you learn about yourself and become your own best friend.",
          "A way to look back at your daily life in the future, showing what you’ve achieved."
        ]
      }
    },
    {
      "type": "header",
      "data": {
        "text": "Practical Benefits of Journaling ✍️",
        "level": 3
      }
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "Clarify Your Thoughts: Understand yourself better through written reflection.",
          "Record Life Events: Capture meaningful moments that might otherwise fade.",
          "Relax and De-Stress: Unload the clutter in your mind and be present.",
          "Break Negative Patterns: Identify and challenge unhealthy thought loops.",
          "Organize Ideas: Simplify your life by sorting mental chaos.",
          "Document Growth: Track your journey and witness your own metamorphosis."
        ]
      }
    },
    {
      "type": "header",
      "data": {
        "text": "The Value of Consistency ⏳",
        "level": 3
      }
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "Journaling doesn’t need to be a chore — make it methodical, yet enjoyable.",
          "Even a short, daily practice helps you stay grounded and intentional.",
          "Remember: ”The human brain erases memories — journaling thanks your future self.”"
        ]
      }
    },
    {
      "type": "header",
      "data": {
        "text": "Minimalism in Journaling 🧘‍♂️",
        "level": 3
      }
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "Focus on the essentials: no elaborate prompts or tools, just you and your thoughts.",
          "A minimal approach ensures that journaling fits seamlessly into your life.",
          "Live purposefully and document it to find meaning in simplicity."
        ]
      }
    },
    {
      "type": "header",
      "data": {
        "text": "🎥 Conclusion:",
        "level": 3
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "“Journaling is not just an activity; it’s a lifestyle. It allows me to live intentionally and embrace minimalism. Start small today — your future self will thank you.”"
      }
    }
  ]
}
}]

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
   const supabase = await createServerSupabaseClient();
   let blog;
  const blogEn = await supabase.from('blogs').select(`*,contents(*)`).eq('id',params.id)   || [];


  if (!blogEn?.data) {
    console.error('Fetch error:');
    return <div>Error loading blogs</div>;
  }else{
    blog = blogEn.data[0];
  }


  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{blog.title}</h1>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
      />
      <div style={{ marginTop: '1rem' }}>
        {blog.contents.blocks.map((block, index) => (
          <React.Fragment key={index}>
            {renderContentBlock(block, index)}
          </React.Fragment>
        ))}
      </div>
      {/* <div style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>{blog.description}</div> */}
      
    </div>
  );
}