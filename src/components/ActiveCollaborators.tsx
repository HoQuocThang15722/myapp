import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";

const ActiveCollaborators = () => {
    const others = useOthers();
    console.log(others);
    const collaborators = others.map((other) => other.info);
    return (
        <ul className="">
            {collaborators.map((collaborator) => (
                <li key={collaborator.id}>
                    <Image
                        src={collaborator.avatar}
                        alt={collaborator.name}
                        width={50}
                        height={50}
                        className="inline-block  rounded-full"
                        style={{ border: `3px solid ${collaborator.color}` }}
                    />

                </li>
            ))}
        </ul>
    );
};

export default ActiveCollaborators;
