import { buttonVariants } from '@/app/components/ui/button'
import Link from 'next/link'

export default function Buttons({genNewSearchParamString}) {
    const categories = [
        'Arts',
        'Business',
        'Computers',
        'Games',
        'Health',
        'Home',
        'Recreation',
        'Science',
        'Shopping',
        'Society',
        'Sports'
    ]
    const buttons = categories.map((ctgry, index) => (
        <Link href={genNewSearchParamString('category', ctgry)} key={index} className={buttonVariants({ variant: "secondary" })}>
            {ctgry}
        </Link>
    ))

    return buttons;
}