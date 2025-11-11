import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { UserButton } from '@clerk/clerk-react';
import AOS from "aos";
import "aos/dist/aos.css";

function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL; 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/blogs`);
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        toast.error('Could not fetch blogs.');
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
  AOS.init({
    duration: 800,       
    once: true,         
    easing: "ease-in-out",
  });
}, []);


  const renderContentPreview = (content) => {
    try {
      const parsed = JSON.parse(content);
      let text = '';
      const tempDiv = document.createElement('div');

      for (const block of parsed.blocks) {
        if (block.type === 'paragraph' || block.type === 'header') {
          tempDiv.innerHTML = block.data.text;
          text += (tempDiv.textContent || tempDiv.innerText || '') + ' ';
        }
      }

      return text.trim();
    } catch {
      return 'No preview available';
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`${apiUrl}/api/blogs/${id}`);
        setBlogs(blogs.filter((blog) => blog.id !== id));
        toast.success('Blog deleted successfully.');
      } catch (error) {
        console.error('Error deleting blog:', error);
        toast.error('Failed to delete blog.');
      }
    }
  };

  return (
    <div className="pt-10">
      <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
        <Toaster position="top-center" />
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8"
          data-aos="fade-down"
          >
            <h1 className="text-3xl font-bold text-gray-800">From the Blog</h1>
            <div className="flex items-center gap-4">
              <Link
                to="/create"
                className="flex items-center gap-2 bg-[rgba(144,0,22,0.8)] text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
              >
                <Plus size={20} />
                Create New Post
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                data-aos="fade-up"
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {blog.banner && (
                  <img
                  src={blog.banner_url || '/assets/placeholder-banner.jpg'}
                  alt="Banner"
                  className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">
                    {renderContentPreview(blog.content)}
                  </p>
                  <div className="flex justify-end items-center gap-4 pt-4 border-t mt-auto">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
                    >
                      Read More
                    </Link>
                    <Link
                      to={`/edit/${blog.id}`}
                      className="text-gray-500 hover:text-green-600 p-2 rounded-full transition-colors"
                    >
                      <Edit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-gray-500 hover:text-red-600 p-2 rounded-full transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
