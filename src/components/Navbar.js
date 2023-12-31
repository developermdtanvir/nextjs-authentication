import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
function Navbar() {
    const { data, status } = useSession();
    console.log(data);
    const items = <>
        {data ? <li onClick={() => signOut()}><a>LogOut</a></li> : <li><Link href='/login'>Login</Link></li>
        }
        <li><Link href='/login'>About</Link></li>
        <li><Link href='/login'>Contact</Link></li>
        <li><Link href='/login'>Blog</Link></li>
    </>


    return (
        <>
            <div className="navbar bg-black fixed z-10 text-white max-w-screen-xl bg-opacity-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;