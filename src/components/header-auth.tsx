"use client";

import {
  Popover,
  PopoverTrigger,
  Avatar,
  PopoverContent,
  Button,
  NavbarItem,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";

// This component is a client component because when server
// components handle cookies, they can't be statically
// generated - they're dynamic

// Being a client component, everything gets handled in the
// client side, so the page is static

export default function HeaderAuth() {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  }

  if (session.data?.user) {
    return (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data?.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="secondary" variant="bordered">
            Sign In
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    </>
  );
}
