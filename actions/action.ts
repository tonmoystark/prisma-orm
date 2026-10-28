"use server";

import { prisma } from "@/lib/db";


export async function createUser(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");

    if(typeof name !== "string" || typeof email !== "string") {
        throw new Error("Name and email are required");
    }
    const data = await prisma.user.create({data: {
        name,
        email,
        createdAt: new Date(),
    }});

    return data;
}

export async function getAllUsers() {
    const data = await prisma.user.findMany();
    return data;
}