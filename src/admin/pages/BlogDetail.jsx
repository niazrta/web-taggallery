import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { ArrowLeft } from "lucide-react";

function formatDate(dateString) {
  if (!dateString) return 'Date not available';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/api/blogs/slug/${slug}`);
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error.response?.data || error.message);
        toast.error(
          'Could not load the blog post: ' +
            (error.response?.data?.error || error.message)
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const renderContent = (content) => {
    try {
      const parsedContent =
        typeof content === 'string' ? JSON.parse(content) : content;

      if (!parsedContent || !parsedContent.blocks) {
        return <p>Content is not available.</p>;
      }

      return parsedContent.blocks.map((block, index) => {
        switch (block.type) {
          case 'header': {
            const HeaderTag = `h${block.data.level}`;
            return (
              <HeaderTag
                key={index}
                className={`ce-header ce-header--h${block.data.level}`}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );
          }

          case 'paragraph':
            return (
              <p
                key={index}
                className="ce-paragraph"
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );

          case 'list': {
            const style = block.data.style;

            // Checklist
            if (style === 'checklist') {
              return (
                <div key={index} className="my-4">
                  {block.data.items.map((item, i) => (
                    <div key={i} className="flex items-start mb-2">
                      <input
                        type="checkbox"
                        checked={item.meta.checked}
                        readOnly
                        className="h-5 w-5 mt-1 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span
                        className={
                          item.meta.checked
                            ? 'line-through text-gray-500'
                            : 'text-gray-800'
                        }
                      >
                        {item.content}
                      </span>
                    </div>
                  ))}
                </div>
              );
            }

            // Ordered / Unordered list
            const listItems = block.data.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.content }} />
            ));

            if (style === 'ordered') {
              const typeMap = {
                'lower-roman': 'i',
                'upper-roman': 'I',
                'lower-alpha': 'a',
                'upper-alpha': 'A',
              };
              const listType = typeMap[block.data.meta.counterType] || '1';

              return (
                <ol
                  key={index}
                  type={listType}
                  style={{ listStyleType: block.data.meta.counterType }}
                  start={block.data.meta.start}
                  className="pl-5 mb-2"
                >
                  {listItems}
                </ol>
              );
            }

            return (
              <ul key={index} className="list-disc pl-5 mb-2">
                {listItems}
              </ul>
            );
          }

          case 'quote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gray-300 pl-4"
              >
                <p
                  className="ce-paragraph"
                  dangerouslySetInnerHTML={{ __html: block.data.text }}
                />
                <cite className="text-gray-500">{block.data.caption}</cite>
              </blockquote>
            );

          case 'image': {
            const caption =
              block.data.caption ||
              block.data.file?.caption ||
              block.data.text ||
              '';

            return (
              <figure key={index} className="my-6">
                <img
                  src={block.data.file?.url}
                  alt={caption || `Image-${index}`}
                  className="rounded-lg shadow-md"
                />
                {caption && (
                  <figcaption className="text-sm text-gray-400 mt-2 italic">
                    {caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          default:
            return null;
        }
      });
    } catch (e) {
      console.error('Failed to render content', e);
      return <p>Error rendering content.</p>;
    }
  };

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!blog) return <div className="text-center p-10">Blog post not found.</div>;

  return (
    <div className="pt-10">
      <div className="bg-gray-50 min-h-screen">
        <Toaster position="top-center" />

        {/* Header */}
        <header className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link
              to="/admin"
              className="text-sm flex items-center gap-2 text-gray-700 hover:text-[rgba(144,0,22,1)] transition"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
              </Link>
              
              <Link
                to={`/edit/${blog.id}`}
                className="bg-[rgba(144,0,22,0.8)] text-white text-sm rounded-full px-4 py-1.5 hover:bg-[rgba(144,0,22,1)] transition-colors"
              >
                Edit Post
              </Link>
            </div>
          </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {blog.banner && (
            <div className="mb-8">
              <img
                src={blog.banner_url || `${apiUrl}/storage/${blog.banner}`}
                alt={blog.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 break-words">
            {blog.title}
          </h1>

          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <p className="text-sm text-gray-500">
              Last updated on {formatDate(blog.updated_at || blog.created_at)}
            </p>
          </div>

          <div>{renderContent(blog.content)}</div>
        </main>
      </div>
    </div>
  );
}

export default BlogDetail;
