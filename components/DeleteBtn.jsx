import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteBtn () {
    return (
        <div className="p-4 text-red-800">
            <FontAwesomeIcon icon={faTrash} size="xl"/>
        </div>
        
    );
}