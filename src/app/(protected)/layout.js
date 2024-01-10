export const metadata = {
    title: 'Favorites',
    description: 'See your favorited articles',
}

export default function LoginLayout({children}) {
  return (
    <div className='flex'>
        {children}
        <div>
            {/* poster */}
        </div>
    </div>
  )
}
