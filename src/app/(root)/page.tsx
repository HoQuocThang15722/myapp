import AddDocumentBtn from "@/components/AddDocumentBtn";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { IoDocumentTextOutline } from "react-icons/io5";

export default async function Home() {
  const clerkUser = await currentUser()
  if (!clerkUser) {
    redirect("/sign-in")
  }
  const document = []
  return (
    <main>
      <Header>
        <div className="flex items-center gap-2">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {document.length > 0 ? (
        <div className=""></div>
      ) : (
        <div className="grid justify-center">
          <div className="mb-4 mx-auto">
            <IoDocumentTextOutline size={50} />
          </div>
          <AddDocumentBtn userId={clerkUser.id} email={clerkUser.emailAddresses[0].emailAddress} />
        </div>
      )}
      <h1>halo</h1>
    </main>
  );
}
