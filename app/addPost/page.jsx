"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
    const [title, setTitle] = useState("");
    const [description, setDiscription] = useState("");

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description is missing");
            return; 
        }
        try {
           const result = await fetch('http://localhost:3000/api/posts', {
                method: "POST", 
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({title, description}),

            });
            if (result.ok) {
                router.push('/');
            }
            else {
                throw new Error ("Failed to create new post");
            }
        } catch (error) {
            console.log("Failed to create post for ", error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input className="border border-slate-500 rounded-lg px-8 py-2"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Post Title" 
            />

            <input className="border border-slate-500 rounded-lg px-8 py-2"
            onChange={(e) => setDiscription(e.target.value)}
            value={description}
            type="text"
            placeholder="Post Description" 
            />

            <button type="submit" className="bg-green-600 font-bold text-white w-fit px-6 py-3 rounded-lg mx-auto">Add Post</button>


        </form>
    );
}