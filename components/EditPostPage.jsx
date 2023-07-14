"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditPostPage ({id, title, description}) {
    const [newtitle, setNewtitle] = useState(title);
    const [newdescription, setNewdescription] = useState(description);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
                cache: "no-store",
                method: "PUT", 
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newtitle, newdescription}),
            });
            if (!res.ok) throw new Error("Failed");
            router.refresh();
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit = {handleSubmit} className="flex flex-col gap-3">
            <input className="border border-slate-500 rounded-lg px-8 py-2"
            onChange={(e)=> setNewtitle(e.target.value)}
            value={newtitle}
            type="text"
            placeholder="Post Title" 
            
            />

            <input className="border border-slate-500 rounded-lg px-8 py-2"
            onChange={(e)=> setNewdescription(e.target.value)}
            value={newdescription}
            type="text"
            placeholder="Post Description" 
            
            />

            <button type="submit" className="bg-green-600 font-bold text-white w-fit px-6 py-3 rounded-lg mx-auto">Update Post</button>


        </form>
    );

}