import { FirestoreService } from "@/firebase/firestoreService";
import { Timestamp } from "firebase/firestore";

export type Blog = {
    blogId: string;
    title: string;
    thumbnail: string;
    description: string;
    content: string;
    createdAt: Timestamp; // ISO date string
}

export async function fetchBlogs() {
    const blogs = await FirestoreService.getAllDocs("Blogs") as Blog[];

    return blogs;
}

export async function fetchBlogsById(id: string) {

    const blog = await FirestoreService.getDoc("Blogs",id) as Blog;

    return blog

}