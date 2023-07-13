"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function DeleteBtn ({id}) {
    const route = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm('Are you sure want to DELETE?');
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
                method: "DELETE",
            });
            if (res.ok) route.refresh();
        }
    }
    return (
        <button onClick={removeTopic} className="text-red-500">
            <FontAwesomeIcon icon={faTrash} size="xl"/>
        </button>
        
    );
}