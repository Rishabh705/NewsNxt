'use client'

import { Badge } from '@/app/components/ui/badge'
import Qbuttons from './Qbuttons'
import ViewButton from './ViewButton'
import { useSearchParams } from 'next/navigation'

export default function Hbuttons() {
    const searchParams = useSearchParams()

    function genNewSearchParamString(key, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }
        return `?${sp.toString()}`
    }

    return (
        <div className='flex items-center gap-4 mb-6'>
            <Badge variant="outline" className='h-10 font-medium text-sm rounded-md'>Headlines &raquo;</Badge>
            <div className='flex flex-1 gap-4 overflow-x-auto button-cont'>
                <Qbuttons genNewSearchParamString={genNewSearchParamString} />
            </div>
            <div  className='hidden md:inline-block'>
                <ViewButton searchParams={searchParams} genNewSearchParamString={genNewSearchParamString} />
            </div>
        </div>
    )
}
