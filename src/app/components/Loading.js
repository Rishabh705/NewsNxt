import { Skeleton } from "@/app/components/ui/skeleton"

export default function Loading() {
    const articles = [...Array(20).keys()]
    const cards = articles.map(i => {
        return (
            <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-4 w-[300px]" />
                <Skeleton className="h-4 w-[300px]" />
                <Skeleton className="h-4 py-2 w-[200px]" />
                <div className="flex flex-col gap-2 py-3">
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[150px]" />
                </div>
            </div>
        )
    })
    return (
        <div className="grid gap-x-4 gap-y-6 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards}
        </div>
    )
}