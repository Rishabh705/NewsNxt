'use client'

import { setFavorite } from "@/lib/actions"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

export default function Favorite({ isFav, id, user }) {
    const [fav, setFav] = useState(isFav);
    const router = useRouter();
    const handleFavorite = async (e) => {
        e.preventDefault();

        setFav((prev) => !prev);

        if (user) {
            const res = await setFavorite(user, id);
            if (res.error) {
                console.error(res.msg);
                return;
            }
        } else {
            router.push('/login');
        }
        router.refresh();
    };
    return (
        <div className="relative flex justify-center items-center select-none w-12 cursor-pointer transition-all z-10">
            <span onClick={(e) => handleFavorite(e)} className="absolute right-0 flex justify-center items-center w-12 h-12 border-2 rounded-full bg-slate-50">
                {fav ? (
                    <IoMdHeart color="#2972f3" size={30} />
                ) : (
                    <IoMdHeartEmpty color="#2972f3" size={30} />
                )}
            </span>
        </div>
    );
}

