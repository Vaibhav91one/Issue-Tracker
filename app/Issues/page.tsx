import { Button } from "@radix-ui/themes"
import Link from "next/link"

export const Issues = () => {
  return (
    <div>
      <Button>
        <Link href='/Issues/new'>
          New Issue
        </Link>
      </Button>
    </div>
    )
}

export default Issues