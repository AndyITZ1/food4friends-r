import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link} from "react-router";

export function AddRecipeFloatBtn() {

  return (
    <Link to="/recipes/new">
      <Button
        variant="outline"
        className="rounded-full size-12 fixed right-5 bottom-5"
        size="icon"
      >
        <SquarePen className="!size-6" />
      </Button>
    </Link>
  );
}