import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Image from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Paragraph from '@editorjs/paragraph';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

function CreatePost() {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [title, setTitle] = useState('');
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerPreview, setBannerPreview] = useState('');
  const [isEditorReady, setIsEditorReady] = useState(false);

  // Banner preview handler
  useEffect(() => {
    if (!bannerImage) {
      setBannerPreview('');
      return;
    }
    const objectUrl = URL.createObjectURL(bannerImage);
    setBannerPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [bannerImage]);

  // Init Editor.js
  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              placeholder: 'Enter a heading',
              levels: [1, 2, 3],
              defaultLevel: 1,
            },
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: {
              placeholder: 'Start typing your paragraph...',
            },
          },
          list: { class: List, inlineToolbar: true },
          quote: { class: Quote, inlineToolbar: true },
          checklist: { class: Checklist, inlineToolbar: true },
          image: {
            class: Image,
            config: {
              uploader: {
                uploadByFile(file) {
                  const formData = new FormData();
                  formData.append('image', file);

                  return axios
                    .post(`${apiUrl}/api/blogs/upload-image`, formData, {
                      headers: { 'Content-Type': 'multipart/form-data' },
                    })
                    .then((res) => ({
                      success: 1,
                      file: { url: res.data.url },
                    }))
                    .catch((err) => {
                      console.error(
                        'Image upload error:',
                        err.response?.data || err.message
                      );
                      return { success: 0 };
                    });
                },
              },
            },
          },
        },
        onReady: () => setIsEditorReady(true),
        onError: (error) =>
          console.error('Editor.js initialization error:', error),
      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current?.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  const handleRemoveBanner = () => setBannerImage(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return toast.error('Please provide a title.');
    if (!isEditorReady) return toast.error('Editor not ready. Please try again.');

    try {
      const editorData = await editorRef.current.save();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', JSON.stringify(editorData));
      if (bannerImage) formData.append('banner', bannerImage);

      const res = await axios.post(`${apiUrl}/api/blogs`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('Blog published successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Publish error:', error.response?.data || error.message);
      toast.error(
        `Error publishing blog: ${
          error.response?.data?.error || 'Check console for details'
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
    <div className="pt-10">
      <div className="bg-white min-h-screen">
        <Toaster position="top-center" />

        {/* Header */}
        <header className="sticky top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 z-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <button
                onClick={handleSubmit}
                className="bg-[rgba(144,0,22,0.8)] text-white text-sm rounded-full px-4 py-1.5 hover:bg-green-700 transition-colors"
              >
                Publish
              </button>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-3xl mx-auto px-4 py-8">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Banner Upload */}
            <div className="mb-8">
              <label className="block text-gray-500 text-sm mb-2">
                Banner Image
              </label>

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
    </div>
  );
}

export default CreatePost;
