import EditPostPage from "@/components/EditPostPage";

const getPostsById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, { 
            cache: 'no-store',
        });

        if (!res.ok) throw new Error("Failed to fetch data");

        return res.json();
    } catch (error) {
        console.log(error);
    }
}


export default async function EditPost({params}) {
    const {id} = params;
    const {posts} = await getPostsById(id);
    const {title, description} = posts;
    
    

    return (

         <EditPostPage id = {id} title = {title} description = {description} /> 
        
    );
}