import { Skeleton } from "@/app/components/ui/skeleton"
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper"

export default function Loading() {
    return (
        <MaxWidthWrapper>
            <div className="py-20 flex flex-col gap-4">
                <Skeleton className=" h-64 w-2/3" />
                <Skeleton className="h-10 w-3/5" />
                <Skeleton className="h-10 w-3/5" />
                <Skeleton className="h-4 w-[300px]" />
                <Skeleton className="h-4 w-[300px]" />
                <Skeleton className="h-4 w-3/5 pt-6" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-[250px] pt-4" />
            </div>
        </MaxWidthWrapper>
    )
}