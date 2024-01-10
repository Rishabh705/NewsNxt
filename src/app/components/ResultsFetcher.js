import Results from './Results'
import { auth } from "../../lib/auth";
import {getFavs} from '@/lib/actions'
import { getHeadlines } from "@/utils/api"


export default async function ResultsFetcher({ searchParams }) {
    const getArticles =  getHeadlines(searchParams.category)
    const getSession =  auth() 
  
    const[articles,session] = await Promise.all([getArticles,getSession]) //parallel fetching
  
    const favs = session?.user ? (await getFavs(session.user.name)).favs : []
  
  return (
    <Results articles={articles} favs={favs} session={session} searchParams={searchParams} />
  )
}
