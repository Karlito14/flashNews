'use client';
import { CryptoApi } from '@/app/api/crypto-api';
import { CryptoInterface } from '@/app/types/crypto-types';
import { useEffect, useState } from 'react';

export const CryptoCard = async () => {
    const [crypto, setCrypto] = useState<CryptoInterface>();
    
    const fetchBitcoin = async () => {
        const bitcoin = await CryptoApi.fetchBitcoin();
        setCrypto(bitcoin);
    };

    useEffect(() => {
        fetchBitcoin();

        const intervalCrypto = setInterval(fetchBitcoin, 20000);

        return () => clearInterval(intervalCrypto);
    },[]);

    const getEmojiValue = (value: string) => {
        const valueNumber = +value;

        if(valueNumber > 0) {
            return <span className='text-green-500'>△</span>;
        }

        return <span className='text-red-500'>▽</span>;
    };

    return (crypto && ( 
        <div>
            <h2 className='text-xl font-bold mb-8'><span className='animate-pulse'>🔴</span> Crypto news</h2>
            <div className='border-2 w-60 p-4 rounded-lg'>
                <h3 className='font-semibold capitalize mb-4'>{crypto.name} market</h3>
                <small className='text-slate-500'>Real time {crypto.name} evolution</small>
                <p>{Number(crypto.priceUsd).toFixed(2)}$ ({Number(crypto.changePercent24Hr).toFixed(2)}%) {getEmojiValue(crypto.changePercent24Hr)}</p>
            </div>
        </div>
    ));
};