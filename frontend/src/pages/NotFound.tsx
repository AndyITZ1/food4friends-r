import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>Page Not Found</h1>
        <h1>404</h1>
        <Button variant="outline">
          <Link to="/">Go to homepage</Link>
        </Button>
      </div>
    </>
  );
}