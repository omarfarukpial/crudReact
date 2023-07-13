import connectMongoDB from "@/libs/mongodb";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";

export async function PUT (request, {params}) {
    const {id} = params;
    const {newTitle: title, newDescription: description} = request.json();
    await connectMongoDB();
    Posts.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "Post updated"}, {status: 200});
}

export async function GET (request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const post = await Posts.findOne({_id: id});
    return NextResponse.json ({post}, {status: 200});


}