import Link from "next/link";
import React from "react";

interface Post {
    id: number;
    title: string;
    contents: string;
    created_at: Date;
    updated_at: Date;
}

const PostComp: React.FC<{post: Post}> = ({post}) => {
    return (
        <div className="p-2 rounded-lg shadow-lg bg-white">
            <h3 className="text-lg">{post.title}</h3>
            <p className="text-md">{post.contents}</p>
            <Link href={`/blog/${post.id}`}>READ MORE</Link>
        </div>
    )
}

export default PostComp;