import Link from 'next/link';
 
export default function NotFound() {
    return (
        <div className='flex flex-col space-y-6'>
            <h2 className='font-semibold text-2xl'>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='underline text-blue-500'>Return Home</Link>
        </div>
    );
}