import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteBtn () {
    return (
        <button className="text-red-500">
            <FontAwesomeIcon icon={faTrash} size="xl"/>
        </button>
        
    );
}