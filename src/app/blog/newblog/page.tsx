"use client";

import React, {useState, useEffect} from "react";
import axios from "axios";
import { FPost } from "@/lib/types";

export default function NewBlogCreate() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
  const [posts, setPosts] = useState<FPost[]>([]);
  const [newPosts, setNewPosts] = useState({title: '', content: ''});

  //create blog
  const createBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/blogs`, newPosts);
      setPosts([response.data, ...posts]);
      setNewPosts({title:'', content:''});
    } catch (error) {
      console.error('Error creating users:', error);
    }
}

    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="font-bold m-2">create new blog</div>
        <form onSubmit={createBlog} className="p-4 bg-blue-100 rounded shadow">
            <input placeholder="title" value={newPosts.title} onChange={(e)=> setNewPosts({...newPosts, title: e.target.value})}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <textarea placeholder="contents" value={newPosts.content} onChange={(e)=>setNewPosts({...newPosts, content: e.target.value})}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full p-2 text-white bg-blue-500 rounder hover:bg-blue-600">
              Add Blog
            </button>
          </form>
      </main>
    );
}