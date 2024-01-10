import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import Favorite from "./Favorite";
import { cn } from "@/lib/utils";

const Results =  ({ articles, favs, session, searchParams }) => {
  
  const viewstyle = searchParams.view === 'grid' ? 'grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-y-6';
  const cards = articles.map((item) => {
    return (
      <Link href={`/${item.uri}`} key={item.uri}>
        <Card className='flex flex-col h-full justify-between shadow-md hover:shadow-lg'>
          <CardHeader>
            <CardTitle>{`${item.title.slice(0, 50)}...`}</CardTitle>
            <CardDescription>{item.date}</CardDescription>
          </CardHeader>
          <CardContent className='flex-1'>
            <p>{item.body ? `${item.body.slice(0, 200)}...` : "No content yet"}</p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <p>{item.source.title ? item.source.title : "Anonymous"}</p>
              <Favorite favs={favs} id={item.uri} user={session?.user?.name || null}/>
            </div>
          </CardFooter>
        </Card>
      </Link>
    )
  })
  return (
    <div className={cn(viewstyle, "py-6")}>
      {cards}
    </div>
  )
}

export default Results