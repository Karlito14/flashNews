import { CryptoApi } from '@/app/api/crypto-api';
import { CryptoCardClient } from './CryptoCard.client';

export const CryptoCard = async () => {
    const bitcoin = await CryptoApi.fetchBitcoin();

    return(
        <CryptoCardClient initialData={bitcoin} />
    );
};