export const metadata = {
    title: 'Detailed news',
    description: 'See detailed content about selected article',
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
