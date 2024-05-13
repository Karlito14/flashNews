import { CryptoInterface } from '../types/crypto-types';

export class CryptoApi {

    static async fetchBitcoin(): Promise<CryptoInterface> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_CRYPTO_URL}/bitcoin`);
        const data = await response.json();
        return data.data;
    };
}