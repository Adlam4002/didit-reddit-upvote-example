import { auth } from "@/auth";
import { db } from "@/db";
export default async function MyPostsPage() {
  const session = await auth();
  // const posts = await db(` SELECT * `)
}
