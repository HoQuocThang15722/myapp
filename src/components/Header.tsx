"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
const Header = ({ children, className }: HeaderProps) => {
    return (
        <nav
            className={cn("container flex items-center justify-around", className)}>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            {children}
        </nav>
    );
};
export default Header;
