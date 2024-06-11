// "use client";

import React, {useState, useEffect} from "react";
import axios from "axios";
import PostComp from "@/components/postComponent/postComp";
import { FPost } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SessionProvider, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
export const dynamic = 'auto'

export default async function BlogPage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

    const response = await axios.get(`${apiUrl}/blogs`);
    const posts = response.data.data.reverse();

    // console.log("server")
  //   const [posts, setPosts] = useState<FPost[]>([]);
  //   const [newPost, setNewPost] = useState({ title: '', content: ''});
  //   const [updatePost, setUpdatePost] = useState({id: '', title: '', content:'' });

  //   //fetch posts
  //   useEffect(() => {
  //   const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`${apiUrl}/blogs`);
  //         setPosts(response.data.data.reverse());
  //     } catch (error) {
  //         console.error('Error fetching data: ', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //   const {data: session} = useSession()
    
  // const session = await getServerSession(options);

    return (

      // <SessionProvider basePath={"/api/auth"} session={session}>
      <main className="flex min-h-screen flex-col p-24 m-2">
        {/* <div className="text-lg p-4 font-bold">BlogPage</div> */}
        
        {/* <div className={!session ? 'hidden' : ''}> */}
        {/* <div>
        <Button asChild variant="outline" className="m-auto">
          <Link href="/blog/newblog">New Post</Link>
        </Button>
        </div> */}
        {/* display */}
        <div className="space-y-2 m-3">
            {posts.map((post:FPost) => (
              // <div key = {post.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow"> 
              <Card key={post.id} className="sm:mx-20">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>{post.content.substring(0, 85) + (post.content.length < 90 ? '':'...')}</CardContent>
                  <CardFooter>
                    <Link className="underline underline-offset-2" href={`/blog/${post.id}`}>READ MORE</Link>
                  </CardFooter>
              </Card>
                //{/* <PostComp post={post} /> */}
                //</div>
                ))}
        </div>
      </main>
      // </SessionProvider>
    );
}
