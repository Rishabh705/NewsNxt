import { CgProfile } from "react-icons/cg"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/components/ui/sheet"
import { IoMdHeart } from "react-icons/io";
import { LuLogOut } from "react-icons/lu"
import Link from "next/link"
import { buttonVariants } from "./ui/button";
import { auth,signOut } from "@/lib/auth";
import { getFavs } from "@/lib/actions";

export default async function Profile() {
    const session = await auth()
    const results = session?.user ? (await getFavs(session.user.name)).results : []

    return (
        <div>
            {
                session?.user ? (
                    <Sheet>
                        <SheetTrigger>
                            <CgProfile size={25} color='#36454F' />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className='mt-6 flex flex-col gap-4'>
                                <div className='flex flex-col items-start'>
                                    <SheetTitle>{session?.user?.name}</SheetTitle>
                                    <p>{session?.user?.email}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-4 pr-6 hover:bg-slate-200 h-full pt-2 pb-2'>
                                        <IoMdHeart size={22} />
                                        <Link href='favorites' className="flex-1 flex justify-between">
                                            Liked articles
                                            <p>{results||'0'}</p>
                                        </Link>
                                    </div>
                                    <form 
                                        action={async () => {
                                            'use server';
                                            await signOut();
                                        }} 
                                        className='flex items-center gap-4 hover:bg-slate-200 pt-2 pb-2'
                                    >
                                        <LuLogOut size={22} />
                                        <button >Logout</button>
                                    </form>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <Link href='/login' className={buttonVariants()}>Log in</Link>
                )
            }
        </div>
    )
}
