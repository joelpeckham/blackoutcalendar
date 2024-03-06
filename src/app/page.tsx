import { Skeleton } from "~/components/ui/skeleton";
import { Separator } from "~/components/ui/separator";
import { SignInCard } from "~/components/signInCard";

export default function HomePage() {
  return (
    <main className="m-0 h-full w-full p-3">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to Blackout Calendar
      </h1>
      <p className="scroll-m-20 py-2 text-lg font-medium text-gray-700">
        Plan your event when everybody can make it.
      </p>
      <Separator />

      <SignInCard />
      
    </main>
  );
}
