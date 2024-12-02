import { useState } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import '../../polyfill'; 
import {ABI} from './ABI';

import './Wallet.css';

const Wallet = ({ saveState }) => {
    const [connected, setConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: "https://bsc-dataseed.binance.org/",  // BSC Mainnet
                    97: "https://data-seed-prebsc-1-s1.binance.org:8545/" // BSC Testnet
                }
            }
        }
    };

    const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
        theme: "dark"
    });

    const init = async () => {
        try {
            setIsLoading(true);
            setError(null);

            // Get provider from Web3Modal
            const provider = await web3Modal.connect();
            
            // Create Web3 instance
            const web3 = new Web3(provider);
            console.log('Web3 instance:', web3);

            // Get connected accounts
            const accounts = await web3.eth.getAccounts();
            console.log('Connected account:', accounts[0]);

            // Initialize contract
            const contract = new web3.eth.Contract(
                ABI, 
                '0x6e6c5c82cb09f3af978089a97287338766a8aad9' // Contract address
            );
            console.log('Contract initialized:', contract);

            setConnected(true);
            saveState({ web3, contract });

            // Subscribe to accounts change
            provider.on("accountsChanged", (accounts) => {
                console.log('Account changed:', accounts[0]);
                if (accounts.length === 0) {
                    handleDisconnect();
                }
            });

            // Subscribe to chainId change
            provider.on("chainChanged", () => {
                window.location.reload();
            });

            // Subscribe to disconnect
            provider.on("disconnect", () => {
                handleDisconnect();
            });

        } catch (error) {
            console.error("Wallet connection error:", error);
            setError(error.message || "Failed to connect wallet");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDisconnect = () => {
        web3Modal.clearCachedProvider();
        setConnected(false);
        saveState({ web3: null, contract: null });
    };

    return (
        <div className="wallet-container">
            <div className="header">
                {error && <div className="error">{error}</div>}
                <button 
                    className="connectBTN" 
                    onClick={connected ? handleDisconnect : init}
                    disabled={isLoading}
                >
                    {isLoading ? "Connecting..." : connected ? "Disconnect Wallet" : "Connect Wallet"}
                </button>
            </div>
        </div>
    );
};

export default Wallet;