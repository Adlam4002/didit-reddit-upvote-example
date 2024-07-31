import Link from "next/link";
import auth from "../app/middleware";

export async function MyProfile() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div>
          {session.user.name}
          <span className="text-xs text-zinc-400 mr-3">#{session.user.id}</span>
          <Link href={`myposts/${session.user.id}`}>My profile</Link>
        </div>
      ) : null}
    </div>
  );
}
