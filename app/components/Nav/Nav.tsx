import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { NAV_ITEMS } from '@/app/constant';
import { NavItem } from '../NavItem/NavItem';

export const Nav = () => {
    return (
        <aside>
            <Image src={logo} alt='flash news' width={140}/>
            <nav className='mt-4'>
                <ul className='space-y-4'>
                    {NAV_ITEMS.map((navItem, index) => <NavItem key={`${index}-^${navItem.category}`} navItem={navItem} />)}
                </ul>
            </nav>
        </aside>
    );
};