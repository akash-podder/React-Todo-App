import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 Description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 Description",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Blog 3 Description",
    },
  ];

  return (
    <main className="mt-10">
      <div className="mb-11">Blogs</div>

      <ul>
        {blogs.map((blog) => {
          
          return ( //Added `return` here, other wise we won't see the Blogs

            <li className="mb-5" key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          );

        })}
      </ul>
    </main>
  );
}
