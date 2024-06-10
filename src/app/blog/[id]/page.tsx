import React, {useState, useEffect} from "react";
import axios from "axios";
import { FPost } from "@/lib/types";

type Params = {
    id: number;
}

export default async function NewBlogCreate({ params }: { params: Params }) {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
  // const [post, setPost] = useState<FPost>();
//   const [singlePost, setSinglePost] = useState({id:'', title: '', contents: ''});

  const response = await axios.get(`${apiUrl}/blogs/${params.id}`);
  const post = response.data;


  // useEffect(() => {
  //   const fetchSingle = async () => {
  //       try {
  //           const response = await axios.get(`${apiUrl}/blogs/${params.id}`);
  //           setPost(response.data);
  //       } catch (error) {
  //           console.error('Error fetching data: ', error);
  //       }
  //   };
  //   fetchSingle();
  // }, []);

    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        {}
        <div className="flex flex-col space-y-15">
            <div className="font-semibold text-3xl m-auto">{post?.title}</div>
            <div className="whitespace-pre-wrap text-lg p-20 m-10">{post?.content}</div>
        </div>
      </main>
    );
}