import React from 'react';
import { FC } from 'react';
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Props } from 'ethers-react';

import Form from './formData';


export const HelloWorld: FC = () => <h1>Hello World</h1>;

const Metamask: React.FC = () => {
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
    const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

    useEffect(() => {
        if ((window as any).ethereum) {
            //check if Metamask wallet is installed
            setIsMetamaskInstalled(true);
        }
    }, []);

    //Does the User have an Ethereum wallet/account?
    async function connectMetamaskWallet(): Promise<void> {
        ///to get around type checkings
        (window as any).ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts: string[]) => {
                setEthereumAccount(accounts[0])
            })

    }

    if (ethereumAccount === null) {
        return (
            <div className="myClass">

                {
                    isMetamaskInstalled ? (
                        <div>
                            <img src="{logo}" alt="logo" />
                            <button onClick={connectMetamaskWallet}>Connect Your Metamask Wallet</button>
                        </div>
                    ) : (
                        <p>Install Your Metamask wallet</p>
                    )
                }
            </div>
        );
    }

    return (
        <div className='metaMaskClass'>
            <p>
                ETH wallet connected as: {ethereumAccount}
            </p>
            <Form />
        </div>
    )

}

export default Metamask;