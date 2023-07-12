import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function EditBtn () {
    return (
        <div className="p-4">
            <FontAwesomeIcon icon={faPenToSquare} size="xl"/>
        </div>
        
    );
}