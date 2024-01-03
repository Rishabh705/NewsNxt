'use client'

import { setFavorite } from "@/lib/actions"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

export default function Favorite({ favs, id, user }) {
    const [fav, setFav] = useState(favs)
    const router = useRouter()
    const handleFavorite = async (e) => {
        e.preventDefault()

        if (user) {
            //display the user that work is done ;)
            if (fav.some(favItem => favItem.toString() === id)) {
                setFav(prev => prev.filter(favItem => favItem.toString() !== id));
            }
            else {
                setFav(prev => [...prev, Number(id)])
            }

            const res = await setFavorite(user, id)
            setFav(res)
        }
        else {
            router.push('/login')
        }
    }
    return (
        <div className="relative flex justify-center items-center select-none w-12 cursor-pointer transition-all z-10">
            <span onClick={(e) => { handleFavorite(e) }} className="absolute right-0 flex justify-center items-center w-12 h-12 border-2 rounded-full bg-slate-50">
                {fav.some(articleId => articleId.toString() === id) ? (
                    <IoMdHeart color="#2972f3" size={30} />
                ) : (
                    <IoMdHeartEmpty color="#2972f3" size={30} />
                )}
            </span>
        </div>
    )
}

