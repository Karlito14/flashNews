'use client';
import { ArticleCategory } from '@/app/types/article-types';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface NavItemInterface {
    src: StaticImageData 
    alt: string; 
    category: string; 
}

export const NavItem = (props: {navItem: NavItemInterface}) => {
    const params  = useParams();
    const isActive = props.navItem.category === params.id;

    return (
        <li>
            <Link href={`/category/${props.navItem.category}`} className={`flex items-center gap-2 p-3 h-12 hover:bg-slate-100 transform transition hover:scale-105 rounded-xl ${isActive && 'bg-orange-50'}`}>
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