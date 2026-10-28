"use server";

import { prisma } from "@/lib/db";


export async function createPost(formData: FormData) {
    const title = formData.get("title");
    const content = formData.get("content");

    if(typeof title !== "string" || typeof content !== "string") {
        throw new Error("Title and content are required");
    }

    const data = await prisma.post.create({data: {
        title,
        content,
        updatedAt: new Date(),
    }})

    return data;
}

export async function getAllPosts() {
    const data = await prisma.post.findMany();
    return data;
}

export async function deletePost(id: string) {
    const data = await prisma.post.delete({where: {id}});
    return data;
}