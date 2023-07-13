import connectMongoDB from "@/libs/mongodb";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Posts.create({title, description});
    return NextResponse.json({message: "Post created"}, {status: 201});
}


export async function GET() {
    await connectMongoDB();
    const posts = await Posts.find();
    return NextResponse.json({posts});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Posts.findByIdAndDelete(id);
    return NextResponse.json({message:"Post deleted"}, {status: 200})
}