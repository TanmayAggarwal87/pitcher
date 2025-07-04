import Link from "next/link";
import { auth, signOut, signIn } from "../../auth";
import { BadgePlus, BrainCircuit, CirclePlus, Github, LogOut, LogOutIcon, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";


const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans ">
      <nav className="flex justify-between items-center">
        <div className="flex items-center justify-between flex-row">
          <BrainCircuit className="text-black font-bold"/>
          <Link href="/" className="text-black font-bold text-3xl">
          
            Pitch<span className="text-blue-600">er</span>
          </Link>

        </div>
        

        <div className="text-black font-lg flex justify-between items-center ">
          {session && session?.user ?(
           
            <div className="flex justify-center items-center flex-row gap-2">
            
              <Link href="startup/create" className="mr-6  flex justify-center items-center flex-row w-full">
                <span className="pr-1.5 text-[18px] hidden sm:inline">Create</span>
                <CirclePlus className="size-6 md:size-5 text-gray-800" />
              </Link>
              


              <div>
                <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer rounded-full"><Image src={`${session?.user?.image}`} width={60} height={60} className="rounded-full" alt="profile"/></DropdownMenuTrigger>
                <DropdownMenuContent className="mr-3">
                  <DropdownMenuLabel>
                      <span>{session?.user?.name}</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="w-full">
                    <Link href={ `/user/${session?.user?.id}`} className="w-full">
                      <div className="flex justify-between items-center flex-row w-full">
                        <span>Profile</span>
                        <UserRound className="size-5 text-gray-800"/>
                      </div>
                      
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="w-full">
                    <form className="w-full"
                      action={async () => {
                        "use server";

                        await signOut({ redirectTo: "/" });
                      }}
                    >
                      <button type="submit" className="cursor-pointer flex justify-between items-center flex-row w-full">
                        <span className="">Logout</span>
                        <LogOut className="size-5 text-gray-800" />
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </div>
              

            </div>


          )
          :
          (
            <button className="cursor-pointer p-2 pr-0 text-lg sm:py-2 bg-slate-800 text-white sm:p-1.5 sm:px-5 hover:bg-slate-900 duration-900 rounded-2xl flex justify-center items-center flex-row" onClick={async()=>{
              "use server"
              await signIn("github")}}>
                <Github className="mr-2"/>
                <span className="hidden sm:inline">Login with Github</span>
              
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;