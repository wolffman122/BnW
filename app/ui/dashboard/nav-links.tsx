import {
    DocumentDuplicateIcon,
    HomeModernIcon,
    ListBulletIcon,
    MinusCircleIcon,
    PencilSquareIcon,
    PlusCircleIcon,
    UserGroupIcon,
    UserMinusIcon,
    UserPlusIcon,
} from '@heroicons/react/24/outline';

import { link } from 'fs';

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeModernIcon },
    { name: 'Items', href: '/dashboard/items', icon: ListBulletIcon},
    { name: 'Add Item', href: '/dashboard/items/add', icon: PlusCircleIcon },
    { name: 'Delete Item', href: '/dashboard/items/delete', icon: MinusCircleIcon },
    { name: 'Upate Item', href: '/dashboard/items/update', icon: PencilSquareIcon },
];

export default function NavLinks() {
    return (
        <>
        { links.map((link) => {
            const LinkIcon = link.icon;
            return (
                <a
                    key={link.name}
                    href={link.href}
                    className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
                >
                    <LinkIcon className="w-6"/>
                    <p className="hidden md:block">{link.name}</p>
                </a>
            );
        })}
        </>
    );
}