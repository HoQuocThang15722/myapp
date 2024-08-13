"use client";

import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { Editor } from "./editor/Editor";
import Header from "./Header";
import ActiveCollaborators from "./ActiveCollaborators";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { currentUser } from "@clerk/nextjs/server";
import { FaRegEdit } from "react-icons/fa";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  const currentUserType = "editor";
  const [documentTitle, setDocumentTitle] = useState(roomMetadata?.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // hdl
  const updateTitleHdl = (e: React.KeyboardEvent<HTMLInputElement>) => { };

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="">
          <Header>
            <div className="flex gap-2 items-center" ref={containerRef}>
              {editing && !loading ? (
                <input
                  type="text"
                  value={documentTitle}
                  ref={inputRef}
                  placeholder="enter title"
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  onKeyDown={updateTitleHdl}
                  disabled={!editing}
                  className="outline-none border-none "
                />
              ) : (
                <div className="">
                  <p>{documentTitle}</p>
                </div>
              )}
              {currentUserType === "editor" && !editing && (
                <FaRegEdit size={20} onClick={() => setEditing(true)} />
              )}
              {currentUserType !== "editor" && !editing && <p>View only</p>}
              {loading && <p>saving...</p>}
            </div>
            <div className="flex items-center gap-2">
              <div className="">
                <ActiveCollaborators />
              </div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
