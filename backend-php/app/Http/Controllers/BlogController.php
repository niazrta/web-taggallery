<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Get all blogs
     */
    public function index()
    {
        $blogs = Blog::orderBy('created_at', 'DESC')->get();
        return response()->json($blogs);
    }

    /**
     * Get blog by ID
     */
    public function show($id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['error' => 'Blog not found'], 404);
        }

        if ($blog->banner) {
            $blog->banner_url = asset('storage/' . $blog->banner);
        }

        return response()->json($blog);
    }

    /**
     * Get blog by slug
     */
    public function showBySlug($slug)
    {
        $blog = Blog::where('slug', $slug)->first();
        if (!$blog) {
            return response()->json(['error' => 'Blog not found'], 404);
        }

        if ($blog->banner) {
            $blog->banner_url = asset('storage/' . $blog->banner);
        }

        return response()->json($blog);
    }

    /**
     * Store new blog
     */
    public function store(Request $request)
    {
        Log::info('Store request data:', $request->all());
        Log::info('Store files:', $request->allFiles());

        if (!$request->hasFile('banner')) {
            Log::warning('No banner file in request');
            return response()->json(['error' => 'The banner failed to upload.'], 500);
        }

        $bannerPath = $request->file('banner')->store('uploads', 'public');

        $blog = Blog::create([
            'title'   => $request->title,
            'content' => $request->content,
            'banner'  => $bannerPath,
        ]);

        if ($blog->banner) {
            $blog->banner_url = asset('storage/' . $blog->banner);
        }

        return response()->json($blog, 201);
    }

    /**
     * Update blog
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['error' => 'Blog not found'], 404);
        }

        $blog->title   = $request->title ?? $blog->title;
        $blog->content = $request->content ?? $blog->content;

        if ($request->hasFile('banner')) {
            // Delete old banner
            if ($blog->banner && Storage::exists('public/' . $blog->banner)) {
                Storage::delete('public/' . $blog->banner);
            }
            $bannerPath   = $request->file('banner')->store('uploads', 'public');
            $blog->banner = $bannerPath;
        }

        $blog->save();

        if ($blog->banner) {
            $blog->banner_url = asset('storage/' . $blog->banner);
        }

        return response()->json($blog);
    }

    /**
     * Delete blog
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
        if (!$blog) {
            return response()->json(['error' => 'Blog not found'], 404);
        }

        if ($blog->banner && Storage::exists('public/' . $blog->banner)) {
            Storage::delete('public/' . $blog->banner);
        }

        $blog->delete();

        return response()->json(['message' => 'Blog deleted']);
    }

    /**
     * Upload image (for EditorJS)
     */
    public function uploadImage(Request $request)
    {
        Log::info('Upload image request data:', $request->all());
        Log::info('Upload image files:', $request->allFiles());

        if (!$request->hasFile('image')) {
            Log::warning('No image file in uploadImage');
            return response()->json(['error' => 'No image file provided'], 400);
        }

        $path = $request->file('image')->store('uploads', 'public');

        return response()->json([
            'success' => 1,
            'url'     => asset('storage/' . $path),
        ]);
    }
}
