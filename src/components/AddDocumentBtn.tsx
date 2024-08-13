'use client';
import { createDocument } from "@/lib/actions/room.action";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const router = useRouter()
    const addDocumentHdl = async () => {
        try {
            const room = await createDocument({ userId, email });
            if (room) {
                router.push(`/documents/${room.id}`);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <main>
            <Button variant="default" type="submit" onClick={addDocumentHdl}>
                + Start a blank document
            </Button>
        </main>
    );
};

export default AddDocumentBtn;
