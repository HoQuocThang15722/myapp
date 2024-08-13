import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const clearkUser = await currentUser();
  if (!clearkUser) {
    redirect("/sign-in");
  }
  // Get the current user from your database
  const { id, firstName, lastName, emailAddresses, imageUrl } = clearkUser;
  const user = {
    id,
    info: {
      id,
      name: `${firstName} ${lastName}`,
      email: emailAddresses[0].emailAddress,
      avatar: imageUrl,
      color: getUserColor(id),
    },
  };

  // Create an ID token for the user
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email,
      groupIds: [], // Optional
    },
    { userInfo: user.info }
  );

  return new Response(body, { status });
}
