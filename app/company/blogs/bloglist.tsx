import { Blog } from "./fetchblog";


interface Props {
  blogs: Blog[];
}

export default function BlogList({ blogs }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 mb-15 mx-auto max-w-7xl">
      {blogs.map((blog) => (
        <div key={blog._id} className="bg-white/15 backdrop-blur-md rounded-xl rounded p-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-40 w-full object-cover rounded"
          />

          <h2 className="font-bold text-2xl mt-3 text-gray-800">{blog.title}</h2>

          <p className="text-[16px] mt-3 text-gray-600">{blog.content}...</p>
          
           

          
        </div>
      ))}
    </div>
  );
}
