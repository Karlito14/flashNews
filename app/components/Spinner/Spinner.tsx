import Image from 'next/image';
import spinner from '@/public/assets/lightning.png';

export const Spinner = () => {
    return (
        <div className='flex flex-col justify-center w-full'>
            <Image src={spinner} alt='loading' width={40} className='animate-spin mb-4' />
            <p>Loading ...</p>
        </div>
    );
};