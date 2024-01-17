import { auth } from "../../lib/auth";
import {getFavs} from '@/lib/actions'
import { getHeadlines } from "@/utils/api"
import NewsCard from './NewsCard';
import { cn } from "@/lib/utils";

export default async function Results({ searchParams }) {
    const getArticles =  getHeadlines(searchParams.category)
    const getSession =  auth() 
  
    const[articles,session] = await Promise.all([getArticles,getSession]) //parallel fetching
  
    const favs = session?.user ? (await getFavs(session.user.name)).favs : []

    const viewstyle = searchParams.view === 'grid' ? 'grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-y-6';
    const cards = articles.map((item) => {
      const isFav = favs.includes(item.uri)
      return (
        <NewsCard key={item.uri} item={item} isFav={isFav} session={session} />
      )
    })
  
  
    return (
      <div className={cn(viewstyle, "py-6")}>
        {cards}
      </div>
    )
}
