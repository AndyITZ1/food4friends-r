import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

export function Navbar() {
  return (
    <>
      <div className="flex h-(--navbar-height) fixed inset-x-0 px-16 py-2 justify-between items-center bg-background">
        <Button variant="ghost">
          <Link to="/">
            <h1 className="font-extrabold text-xl">Food4Friends</h1>
          </Link>
        </Button>
        <div className="flex h-6 gap-4 items-center">
          <ModeToggle />
          <Separator className="h-2/3" orientation="vertical" />
          <h2 className="font-bold text-md">Hi, User</h2>
        </div>
      </div>
    </>
  )
}