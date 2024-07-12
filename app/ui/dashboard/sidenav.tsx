import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav () {
    return (
        <div>
            <Link href="/">Root</Link>
            <div className='flex grow flex-row justify-between space-x-2 md:flex-col  md:spay-y-2'>
                <NavLinks />
                <div className='hidden h-auto w-full grow rounded-md md:block'></div>
                <form>
                    <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
                        <PowerIcon className='w-6' />
                        <div className='hidden md:block'>Sign Out</div>
                    </button>
                </form>
            </div>
        </div>        
    );
}