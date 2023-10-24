import Link from "next/link";

// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/Card";
import { Icons } from "@/components/Icons";

const Page = () => {
  return (
    <div className="flex h-full items-center justify-center">
      {/* <Card className="w-[500px]">
    <CardHeader>
      <CardTitle className="mb-4 flex items-center justify-center">
        <Icons.ban className="mr-2 h-6 w-6 " />
        Nicht gefunden (404)
      </CardTitle>
      <CardDescription className="text-center">
        Die angeforderte Seite konnte nicht gefunden werden.
      </CardDescription>
    </CardHeader>

    <CardFooter> */}
      <Link
        href="/"
        className="text-md w-[500px] rounded-md border bg-primary px-4 py-2 text-center text-primary-foreground hover:bg-primary/90"
      >
        Zurück zur Startseite
      </Link>
      {/* </CardFooter>
  </Card> */}
    </div>
  );
};

export default Page;
