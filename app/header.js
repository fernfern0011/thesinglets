import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-stone-100 py-10'>
            <nav className='center'>
                <ul className='flex justify-center gap-8'>
                    <li>
                        <Link className='text-sm font-medium uppercase'
                            href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='text-sm font-medium uppercase'
                            href='/users'>Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header