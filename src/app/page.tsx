import { Button } from "@nextui-org/react";
import * as action from "@/actions";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={action.signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={action.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? <div>{JSON.stringify(session.user)}</div> : null}
    </div>
  );
}
