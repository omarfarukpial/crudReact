import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

export default function PostList() {
    return (
        <>
            <div className="flex justify-between mt-5 px-3 ">
                <div>
                    <h2>Title</h2>
                    <div>Description</div>
                </div>
                <div className="flex">
                    <EditBtn/>
                    <DeleteBtn/>
                </div>
            </div>
        </>
    );

}