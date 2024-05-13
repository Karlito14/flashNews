'use client';
import { useState } from 'react';

export default function TemplateArticle(props: {children: React.ReactNode}) {
    const [rating, setRating] = useState('');

    const sendRating = () => {
        alert('Rating submited ! Thanks');
    };

    return (
        <>
            {props.children}
            <div className='fixed top-10 right-10 space-y-2'>
                <span>Rate this article</span>
                <form action="" className='flex space-x-2'>
                    <input type="number" minLength={0} maxLength={5} className='border border-slate-200 block w-10' />
                    <button onClick={sendRating} className='text-xs bg-yellow-500 p-2 text-white rounded-lg'>Send rating</button>
                </form>
            </div>
        </>
    );
};