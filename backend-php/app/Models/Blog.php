<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
    protected $fillable = ['title','content','banner','slug'];

    // Generate unique slug otomatis
    public static function boot()
    {
        parent::boot();

        static::creating(function ($blog) {
            $blog->slug = $blog->generateUniqueSlug($blog->title);
        });

        static::updating(function ($blog) {
            $blog->slug = $blog->generateUniqueSlug($blog->title, $blog->id);
        });
    }

    protected function generateUniqueSlug($title, $excludeId = null)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (static::where('slug', $slug)
            ->where('id', '!=', $excludeId)
            ->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}