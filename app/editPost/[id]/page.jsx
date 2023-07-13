

const getPostsById = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`)
    } catch (error) {

    }
}


export default function EditPost({params}) {
    const {id} = params;

    return (
        <form className="flex flex-col gap-3">
            <input className="border border-slate-500 rounded-lg px-8 py-2"
            type="text"
            placeholder="Post Title" 
            />

            <input className="border border-slate-500 rounded-lg px-8 py-2"
            type="text"
            placeholder="Post Description" 
            />

            <button className="bg-green-600 font-bold text-white w-fit px-6 py-3 rounded-lg mx-auto">Update Post</button>


        </form>
    );
}