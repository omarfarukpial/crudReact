import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import Link from "next/link";

export default function PostList() {
    return (
        <>
            <div className="flex justify-between mt-5 px-4 border border-slate-300 p-5 gap-5 rounded-lg">
                <div>
                    <h2 className="font-bold text-2xl">Title</h2>
                    <div>Description</div>
                </div>
                <div className="flex gap-5 ">
                    <Link href={"/editPost/123"}>
                        <EditBtn/>
                    </Link>
                    <Link href={"/deletePost/123"}>
                        <DeleteBtn/>
                    </Link>
                </div>
            </div>
        </>
    );

}