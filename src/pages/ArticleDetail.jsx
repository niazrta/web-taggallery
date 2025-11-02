import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LatestArticles from '../components/LatestArticles';
import ServiceList from '../components/ServiceList';

function renderContent(content) {
  try {
    const parsedContent = typeof content === 'string' ? JSON.parse(content) : content;
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
              className={`text-white ce-header ce-header--h${block.data.level}`}
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

          // ✅ Checklist
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
                          ? 'line-through text-white-500'
                          : 'text-white-800'
                      }
                    >
                      {item.content}
                    </span>
                  </div>
                ))}
              </div>
            );
          }

          // ✅ Ordered / Unordered List
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
          } else {
            return (
              <ul key={index} className="list-disc pl-5 mb-2">
                {listItems}
              </ul>
            );
          }
        }

        case 'quote':
          return (
            <blockquote key={index} className="border-l-4 border-gray-300 pl-4">
              <p
                className="ce-paragraph"
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
              <cite className="text-white-500">{block.data.caption}</cite>
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
                <figcaption className="text-sm text-white-400 mt-2 italic">
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
  }
}

function formatDate(dateString) {
  if (!dateString) {
    return 'Date not available';
  }
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

const ArticleDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/api/blogs/slug/${slug}`);
        setBlog(data);

        const allBlogsRes = await axios.get(`${apiUrl}/api/blogs`);
        setAllBlogs(allBlogsRes.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Artikel tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-[#8a0000] text-white flex flex-col justify-center p-8 md:p-0">
      {/* Background Element */}
      <div className="overflow-hidden absolute top-0 right-0 w-full h-full z-[1]">
        <img
          src="/assets/foto-ServicePage/bg-kanan-atas.png"
          alt="Elemen dekoratif kanan"
          className="absolute -top-1 -right-2 w-[300px] h-[480px] pointer-events-none"
        />
      </div>

      {/* Content Container */}
      <div className="relative bg-[rgba(94,1,0,1)] p-10 rounded-t-[130px] lg:flex mt-25 z-[2]">
        <div className="relative max-w-7xl mx-auto lg:flex lg:gap-12">
          {/* --- Left Section (Main Content) --- */}
          <div className="lg:w-2/3 lg:pr-20 lg:border-r lg:border-white/50">
            {/* Title & Date */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {blog.title}
              </h1>
              <p className="text-md text-bold underline">
                {formatDate(
                  blog.updated_at ||
                    blog.updatedAt ||
                    blog.created_at ||
                    blog.createdAt
                )}
              </p>
            </div>

            {/* Banner Image */}
            <img
              src={blog.banner_url || `${apiUrl}/storage/${blog.banner}`}
              alt={blog.title}
            />

            {/* Article Content */}
            <div className="article-content">{renderContent(blog.content)}</div>
          </div>

          {/* --- Right Section (Sidebar) --- */}
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="lg:sticky top-28 h-fit">
              {allBlogs.length > 1 && (
                <LatestArticles articles={allBlogs} currentArticleId={blog.id} />
              )}
              <ServiceList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
