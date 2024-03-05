import { UserButton, SignInButton, SignOutButton, auth } from "@clerk/nextjs";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  const { userId } = auth();
  return (
    <main className="m-0 h-full w-full p-3">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to Blackout Calendar
      </h1>
      <p className="scroll-m-20 text-lg font-medium text-gray-700 py-2">
        Plan your event when everybody can make it.
      </p>

      <Separator/>
      
      {userId ? (
        <Button variant="destructive">
          <SignOutButton> Sign Out </SignOutButton>
        </Button>
      ) : (
        <Button>
          <SignInButton> Sign In </SignInButton>
        </Button>
      )}
      <UserButton />
    </main>
  );
}
