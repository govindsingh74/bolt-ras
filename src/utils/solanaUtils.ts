import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

// Define supported networks
export const NETWORKS = {
  mainnet: clusterApiUrl('mainnet-beta'),
  devnet: clusterApiUrl('devnet'),
};

// Token symbols (add more tokens here as needed)
const TOKEN_SYMBOLS: Record<string, string> = {
  So11111111111111111111111111111111111111112: 'SOL', // Native Solana token
  '4dPY9VD4J2zvebvY9bUwngmVNQewhwFEMKV8uQStpump': 'RATSO', // Example token
};

// Utility to create a new connection
export const createConnection = (endpoint: string): Connection => {
  try {
    return new Connection(endpoint);
  } catch (error) {
    console.error('Error creating connection:', error);
    throw error;
  }
};

// Fetch SOL balance for a wallet
export const getBalance = async (connection: Connection, publicKey: PublicKey): Promise<number> => {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL; // Convert lamports to SOL
  } catch (error) {
    console.error('Error fetching balance for public key:', publicKey.toString(), error);
    throw new Error('Failed to fetch SOL balance');
  }
};

// Fetch token accounts for a wallet
export const getTokenAccounts = async (
  connection: Connection,
  publicKey: PublicKey
): Promise<
  {
    mint: string;
    amount: number;
    decimals: number;
    symbol: string;
  }[]
> => {
  try {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: TOKEN_PROGRAM_ID,
    });

    return tokenAccounts.value.map(account => {
      const tokenInfo = account.account.data.parsed.info.tokenAmount;
      const mint = account.account.data.parsed.info.mint;

      return {
        mint,
        amount: tokenInfo.uiAmount || 0, // Handle undefined amounts gracefully
        decimals: tokenInfo.decimals || 0,
        symbol: TOKEN_SYMBOLS[mint] || `Unknown (${mint.slice(0, 4)}...)`, // Fallback for unknown tokens
      };
    });
  } catch (error) {
    console.error('Error fetching token accounts for public key:', publicKey.toString(), error);
    return []; // Return an empty array on error
  }
};

// Fetch recent transactions for a wallet
export const getRecentTransactions = async (
  connection: Connection,
  publicKey: PublicKey,
  limit: number = 10 // Optional limit parameter
): Promise<
  {
    signature: string;
    blockTime: number | null | undefined;
    slot: number;
  }[]
> => {
  try {
    const transactions = await connection.getSignaturesForAddress(publicKey, { limit });
    return transactions.map(tx => ({
      signature: tx.signature,
      blockTime: tx.blockTime ?? null, // Handle undefined blockTime gracefully
      slot: tx.slot,
    }));
  } catch (error) {
    console.error('Error fetching recent transactions for public key:', publicKey.toString(), error);
    throw new Error('Failed to fetch recent transactions');
  }
};
