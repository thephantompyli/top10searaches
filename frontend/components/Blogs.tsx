import Link from 'next/link';


export type Blog = {
  id: string;
  title: string;
  imageUrl : string;
  badges : Array<1>;
  description: string;
};

type BlogListProps = {
  blogs: Blog[];
};
function onBlogListReadMore() {
 

            
}
const BlogList: React.FC<BlogListProps> = ({ blogs }) => (
  <section>

  <ul style={{ listStyle: "none", padding: 0 }}>
    {blogs.map((blog) => (
      <li
        key={blog.id}
        style={{
          display: "flex",
          background: "#fff",
          borderRadius: "16px",
          marginBottom: "32px",
          padding: "24px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          alignItems: "flex-start",
          maxWidth: 900,
        }}
      >
        <img
          src={blog.imageUrl}
          alt={blog.title}
          style={{
            width: 160,
            height: 160,
            objectFit: "cover",
            borderRadius: "12px",
            marginRight: "32px",
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 12 }}>
            {blog.badges?.split(',').map((b, i) => (
              <span
                key={b}
                style={{
                  padding: "4px 12px",
                  marginRight: 8,
                  borderRadius: "8px",
                  fontSize: 13,
                  color: "#fff",
                  background: i === 0 ? "#FF5555" : "#007BFF",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 0.6,
                }}
              >
                {b}
              </span>
            ))}
          </div>
          <h2 style={{ margin: 0, fontSize: 24 }}>{blog.title}</h2>
          <p style={{ color: "#444", margin: "14px 0 18px 0" }}>{blog.description}</p>
          {/* <a style={{ fontWeight: "bold", textDecoration: "underline", color: "#111" }} href="#" onClick={onBlogListReadMore}>
            READ MORE
          </a> */}
          <Link href={`/blogDetail/${blog.id}`} style={{ fontWeight: "bold", textDecoration: "underline", color: "#111" }}>
            READ MORE
          </Link>
        </div>
      </li>
    ))}
  </ul>
  </section>
);




export default BlogList;
