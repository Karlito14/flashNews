import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface NavItemInterface {
    src: StaticImageData 
    alt: string; 
    category: string; 
}

export const NavItem = (props: {navItem: NavItemInterface}) => {
    return (
        <li>
            <Link href={`/articles/category/${props.navItem.category}`} className='flex items-center gap-2 p-3 h-12 hover:bg-slate-100 transform transition hover:scale-105 rounded-xl'>
                <div className='flex justify-center items-center border rounded-full p-2'>
                    <Image src={props.navItem.src} alt={props.navItem.alt} width={20} height={20} />
                </div>
                <div>
                    <h2 className='capitalize font-semibold'>{props.navItem.category}</h2>
                </div>
            </Link>
        </li>
    );
};