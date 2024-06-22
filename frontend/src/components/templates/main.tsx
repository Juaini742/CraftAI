import { Sidebar } from "./sidebar";
import { IoLogOutOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FaRegUser } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Template({ children, className }: Props) {
  return (
    <div className="h-screen w-full relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="../images/live1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 w-full h-full flex flex-col bg-black/25 overflow-y-auto">
        <header className="h-14 flex items-center justify-between border-b bg-black/35 backdrop-blur-sm sticky top-0 left-0 right-0">
          <nav className="w-[90%] mx-auto flex justify-between items-center">
            <Sidebar />
            <h2 className="text-xl font-jamjure font-bold text-shadow">
              CraftAI
            </h2>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none border-none">
                <div className="h-10 w-10 p-1 bg-gray-600 rounded-full shadow-round shadow-purple-900 flex justify-center items-center">
                  {/* <img src="../images/avatarR.png" alt="Avatar User" /> */}
                  <span className="text-xl">
                    <FaRegUser />
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute top-4 -left-24">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    variant="destructive"
                    className="px-5 flex gap-2 items-center"
                  >
                    <span className="text-xl">
                      <IoLogOutOutline />
                    </span>
                    <span>Logout</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </header>
        <main className={`flex-1 w-full ${className}`}>{children}</main>
      </div>
    </div>
  );
}
