import Link from "next/link";

import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Icons } from "@/components/Icons";

import { getPath } from "@/lib/utils";

const Page = () => {
  return (
    <div className="flex h-[85vh] items-center justify-center">
      {/* <Card className="max-w-[500px]">
        <CardHeader>
          <CardTitle className="mb-4 flex items-center justify-center">
            Not Found (404)
          </CardTitle>
          <CardDescription className="text-center">
            The requested page could not be found.
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button asChild className="w-full">
            <Link href={getPath("")}>
              <Icons.arrowLeft className="mr-2 h-4 w-4" />
              Go back
            </Link>
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  );
};

export default Page;
