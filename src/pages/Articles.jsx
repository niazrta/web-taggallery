import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Articles() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL;
        const res = await axios.get(`${apiUrl}/api/blogs`);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const results = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(results);
  }, [searchTerm, blogs]);

  const createPreview = (content) => {
    try {
      const parsed = JSON.parse(content);

      // Cari blok pertama yang merupakan paragraf atau header
      const textBlock = parsed.blocks.find(
        (block) => block.type === "paragraph" || block.type === "header"
      );

      if (!textBlock) return "";

      // Hapus tag HTML dari teks
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = textBlock.data.text;
      const plainText = tempDiv.textContent || tempDiv.innerText || "";

      // Batasi maksimal 150 karakter
      return plainText.length > 150
        ? plainText.substring(0, 150) + "..."
        : plainText;
    } catch {
      return "No preview available";
    }
  };

  return (
    <div className="pt-20 bg-gradient-to-br from-[#8a0000] to-[#4d0000] min-h-screen p-8">
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            width: 100%;
            overflow-x: hidden;
            background-color: #8a0000;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        {/* Header & Search */}
        <div
          className="flex justify-between items-center mb-8"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Semua Artikel</h1>
          <input
            type="search"
            placeholder="Cari artikel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder:text-white/100 w-1/3 focus:ring-white focus:border-white"
          />
        </div>

        {/* Articles Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {filteredBlogs.map((blog, index) => (
            <Link
            to={`/artikel/${blog.slug}`}
            key={blog.id}
            className="block h-full w-full max-w-sm mx-auto"
            data-aos="zoom-in"
            >
              <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
              >
                <img
                src={blog.banner_url || '/assets/placeholder-banner.jpg'}
                alt={blog.title}
                className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                    {createPreview(blog.content)}
                    </p>
                    
                    <span
                    className="text-red-600 hover:underline font-semibold mt-auto"
                    >
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center text-white text-xl py-20">
            <p>Artikel tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Articles;
