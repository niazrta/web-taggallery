import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LatestArticles from "../components/LatestArticles";
import ServiceList from "../components/ServiceList";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

// --- Fungsi Render Content ---
function renderContent(content) {
  try {
    const parsedContent =
      typeof content === "string" ? JSON.parse(content) : content;

    if (!parsedContent || !parsedContent.blocks) {
      return <p>Content is not available.</p>;
    }

    return parsedContent.blocks.map((block, index) => {
      switch (block.type) {
        case "header": {
          const HeaderTag = `h${block.data.level}`;
          return (
            <HeaderTag
              key={index}
              className={`text-white ce-header ce-header--h${block.data.level}`}
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
          );
        }

        case "paragraph":
          return (
            <p
              key={index}
              className="ce-paragraph"
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
          );

        case "list": {
          const { style, items, meta } = block.data;

          const listItems = items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item.content }} />
          ));

          if (style === "ordered") {
            const typeMap = {
              "lower-roman": "i",
              "upper-roman": "I",
              "lower-alpha": "a",
              "upper-alpha": "A",
            };
            const listType = typeMap[meta?.counterType] || "1";

            return (
              <ol
                key={index}
                type={listType}
                style={{ listStyleType: meta?.counterType }}
                start={meta?.start}
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

        case "quote":
          return (
            <blockquote key={index} className="border-l-4 border-gray-300 pl-4">
              <p
                className="ce-paragraph"
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
              <cite className="text-white-500">{block.data.caption}</cite>
            </blockquote>
          );

        case "image": {
          const caption =
            block.data.caption ||
            block.data.file?.caption ||
            block.data.text ||
            "";

          const imageClasses = ["rounded-lg", "shadow-md"];

          if (block.data.withBackground)
            imageClasses.push("bg-gray-100", "p-4");
          if (block.data.withBorder)
            imageClasses.push("border", "border-gray-300");

          if (block.data.stretched) {
            imageClasses.push("w-full", "max-w-full");
          } else {
            imageClasses.push("block", "max-w-xl", "mx-auto");
          }

          return (
            <figure key={index} className="my-6">
              <img
                src={block.data.file?.url}
                alt={caption || `Image-${index}`}
                className={imageClasses.join(" ")}
                loading="lazy"
              />
              {caption && (
                <figcaption className="text-sm text-white-400 mt-2 italic text-center">
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
    console.error("Failed to render content", e);
  }
}

// --- Format Date ---
function formatDate(dateString) {
  if (!dateString) return "Date not available";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("id-ID", options);
}

const ArticleDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${apiUrl}/api/blogs/slug/${slug}`
        );
        setBlog(data);

        const allBlogsRes = await axios.get(`${apiUrl}/api/blogs`);
        setAllBlogs(allBlogsRes.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
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
    <div className="relative w-full bg-[#8a0000] text-white flex flex-col justify-center py-8 md:p-0">
      {/* Background */}
      <div className="overflow-hidden absolute top-0 right-0 w-full h-full z-[1]">
        <img
          src="/assets/foto-ServicePage/bg-kanan-atas.png"
          alt="Elemen dekoratif kanan"
          className="absolute -top-1 -right-2 w-[300px] h-[480px] pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative bg-[rgba(94,1,0,1)] p-10 rounded-t-[60px] lg:flex mt-25 z-[2]">
        <div className="relative max-w-7xl mx-auto lg:flex lg:gap-12">
          {/* Left */}
          <div className="lg:w-2/3 lg:pr-20 lg:border-r lg:border-white/50">
            {/* Title */}
            <motion.div
              className="mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {blog.title}
              </h1>
              <div className="flex items-center text-md text-white/70 mt-2">
                <Calendar size={16} className="mr-2 opacity-80" />
                <span>
                  {formatDate(
                    blog.updated_at ||
                      blog.updatedAt ||
                      blog.created_at ||
                      blog.createdAt
                  )}
                </span>
              </div>
            </motion.div>

            {/* Banner */}
            <motion.img
              src={
                blog.banner_url || `${apiUrl}/api/storage/${blog.banner}`
              }
              alt={blog.title}
              loading="lazy"
              className="w-full rounded-lg shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Content */}
            <motion.div
              className="article-content mt-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {renderContent(blog.content)}
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <motion.div
            className="lg:w-1/3 mt-12 lg:mt-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="lg:sticky top-28 h-fit">
              {allBlogs.length > 1 && (
                <LatestArticles
                  articles={allBlogs}
                  currentArticleId={blog.id}
                />
              )}
              <ServiceList />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
