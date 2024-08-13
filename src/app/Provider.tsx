"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { getClerkUsers } from "@/lib/actions/user.action";

export function Provider({ children }: { children: ReactNode }) {
    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={async ({ userIds }) => {
                const users = await getClerkUsers({ userIds });
                return users;
            }}>
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    );
}

// publicApiKey = {
//     "pk_dev_xgmKNfXeQaMTnZTTfJeP_6x6h0Jw64AelY491Ir5ggox_zZdTiJfXwTuQYUFNmk2"
//             }
