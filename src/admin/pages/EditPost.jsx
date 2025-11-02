import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Image from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Paragraph from '@editorjs/paragraph';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

function EditPost() {
  const { id } = useParams();
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [title, setTitle] = useState('');
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerPreview, setBannerPreview] = useState('');
  const [initialContent, setInitialContent] = useState(null);

  // Banner preview
  useEffect(() => {
    if (!bannerImage) return;
    const objectUrl = URL.createObjectURL(bannerImage);
    setBannerPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [bannerImage]);

  // Fetch existing blog data
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/api/blogs/${id}`);

        setTitle(data.title);

        if (data.bannerImage) {
          setBannerPreview(`${apiUrl}${data.bannerImage}`);
        } else if (data.banner_url) {
          setBannerPreview(data.banner_url);
        } else if (data.banner) {
          setBannerPreview(`${apiUrl}/storage/${data.banner}`);
        }

        let parsedContent;
        try {
          parsedContent =
            typeof data.content === 'string'
              ? JSON.parse(data.content)
              : data.content;
        } catch (err) {
          console.error('Content parsing error:', err);
          parsedContent = { blocks: [] };
        }

        setInitialContent(parsedContent);
      } catch (error) {
        toast.error('Failed to load blog data.');
        console.error('Fetch error:', error);
      }
    };
    fetchBlogData();
  }, [id, apiUrl]);

  // Init EditorJS with existing content
  useEffect(() => {
    if (!initialContent || editorRef.current) return;

    const editor = new EditorJS({
      holder: 'editorjs',
      data: initialContent,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: { placeholder: 'Enter a heading' },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: { placeholder: 'Start typing your paragraph...' },
        },
        list: { class: List, inlineToolbar: true },
        quote: { class: Quote, inlineToolbar: true },
        checklist: { class: Checklist, inlineToolbar: true },
        image: {
          class: Image,
          config: {
            uploader: {
              async uploadByFile(file) {
                const formData = new FormData();
                formData.append('image', file);
                try {
                  const response = await axios.post(
                    `${apiUrl}/api/blogs/upload-image`,
                    formData,
                    { headers: { 'Content-Type': 'multipart/form-data' } }
                  );
                  return { success: 1, file: { url: response.data.url } };
                } catch (error) {
                  toast.error('Image upload failed!');
                  return { success: 0, file: { url: '' } };
                }
              },
            },
          },
        },
      },
      onReady: () => console.log('Editor.js ready.'),
    });

    editorRef.current = editor;

    return () => {
      if (editorRef.current?.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [initialContent, apiUrl]);

  const handleRemoveBanner = () => {
    setBannerImage(null);
    setBannerPreview('');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return toast.error('Please provide a title.');
    if (!editorRef.current) return toast.error('Editor is not ready.');

    try {
      const editorData = await editorRef.current.save();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', JSON.stringify(editorData));
      if (bannerImage) formData.append('banner', bannerImage);

      const res = await axios.post(`${apiUrl}/api/blogs/${id}?_method=PUT`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('Blog updated successfully!');
      navigate(`/blog/${res.data.slug}`);
    } catch (error) {
      console.error('Update error:', error.response?.data || error.message);
      toast.error(
        `Error updating blog: ${
          error.response?.data?.message || 'Check server or input'
        }`
      );
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="bg-white min-h-screen">
      <Toaster position="top-center" />

      {/* Header */}
      <header className="sticky top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white text-sm rounded-full px-4 py-1.5 hover:bg-green-700 transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Banner */}
          <div className="mb-8">
            <label className="block text-gray-500 text-sm mb-2">Banner Image</label>
            {bannerPreview ? (
              <div className="relative">
                <img
                  src={bannerPreview}
                  alt="Banner Preview"
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <label
                    htmlFor="banner-upload"
                    className="bg-white/80 backdrop-blur-sm text-black text-xs font-semibold px-2 py-1 rounded-md cursor-pointer hover:bg-white transition"
                  >
                    Change
                  </label>
                  <button
                    type="button"
                    onClick={handleRemoveBanner}
                    className="bg-red-500/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-md hover:bg-red-500 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <label
                htmlFor="banner-upload"
                className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
              >
                + Add a banner image
              </label>
            )}
            <input
              id="banner-upload"
              type="file"
              onChange={(e) => setBannerImage(e.target.files[0])}
              className="hidden"
              accept="image/*"
            />
          </div>

          {/* Title */}
          <textarea
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
            className="w-full text-5xl font-serif resize-none border-none focus:ring-0 focus:outline-none overflow-hidden p-0 mb-8 placeholder:text-gray-300"
            rows={1}
          />

          {/* Editor */}
          <div id="editorjs" className="font-serif prose-lg max-w-none" />
        </form>
      </main>
    </div>
  );
}

export default EditPost;
