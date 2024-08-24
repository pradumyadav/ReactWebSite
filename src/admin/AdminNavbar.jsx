import { IoLogOutOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
    return (
        <div className='h-20 w-full shadow-md flex items-center justify-between px-10'>
            <Link to="/admin/dashboard" className='font-semibold font-poppins text-lg relative after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>
                Home
            </Link>
            <Link to="/admin/logout" className='font-semibold font-poppins text-base bg-red-500 px-4 py-2 rounded-lg text-white hover:scale-105 transition-all cursor-pointer flex gap-2 items-center justify-center'>
                Logout <IoLogOutOutline />
            </Link>
        </div>
    )
}
