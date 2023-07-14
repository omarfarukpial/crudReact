/* eslint-disable react/jsx-key */
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import Link from "next/link";


const getPosts = async () => {
    try {
        const result = await fetch('http://localhost:3000/api/posts', {
            cache: "no-store",
        });
        if (!result.ok) {
            throw new Error("Failed to fetch posts");
        }
        return result.json();
    } catch (error) {
        console.log("Error loading post is: ", error);
    }
};

export default async function PostList() {
    const {posts} = await getPosts();
    return (
        <>
            {posts.map((p) => (
            <div className="flex justify-between items-center mt-5 px-4 border border-slate-300 p-5 gap-5 rounded-lg">
                <div>
                    <h2 className="font-bold text-2xl">{p.title}</h2>
                    <div>{p.description}</div>
                </div>
                <div className="flex gap-5 ">
                    <Link href={`/editPost/${p._id}`}>
                        <EditBtn/>
                    </Link>
                    <DeleteBtn id = {p._id}/>
                </div>
            </div>
            ))}
      
        </>
    );

}