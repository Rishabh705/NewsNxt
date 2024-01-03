import { buttonVariants } from './ui/button'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function ViewButton({searchParams,genNewSearchParamString,className}) {
    let view = searchParams.get('view')
    view = view === 'grid' ? 'list' : 'grid'
    return (
        <Link href={genNewSearchParamString('view', view)} className={cn(buttonVariants(),className)}>
            {view !== 'grid' ? <BsFillGrid3X3GapFill /> : <FaThList />}
        </Link>
    )
}
