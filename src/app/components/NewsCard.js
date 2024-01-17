import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"
import Favorite from "@/app/components/Favorite"

export default function NewsCard({ item, isFav, session }) {
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
                        <Favorite isFav={isFav} id={item.uri} user={session?.user?.name || null} />
                    </div>
                </CardFooter>
            </Card>
        </Link>)
}
