import {useEffect, useState} from 'react';
import axios from 'axios';
import useBEPRO from '@x-hooks/use-bepro';

interface ChainInfo {
  name: string;
  chain: string;
  network: string;
  icon: string;
  rpc: string[];
  faucets: string[];
  chainId: number;
  networkId: number;
  nativeCurrency: { name: string; symbol: string; decimals: string; };
  explorers : {name: string; url: string; standard: string}[]
}

const CHAINS: ChainInfo[] = [];

export default function useChainInfo() {
  const [chains, setChains] = useState<ChainInfo[]>([]);
  const [currentChain, setCurrentChain] = useState<ChainInfo>(null);
  const {web3, currentAddress} = useBEPRO();

  function updateCurrentChain() {
    const provider = (window as any).ethereum || web3.currentProvider;
    setCurrentChain(chains.find(({chainId}) => chainId === +provider?.chainId));
  }

  useEffect(updateCurrentChain, [web3, currentAddress, chains])

  useEffect(() => {
    (async function getChains() {
      if (!CHAINS.length)
        axios.get<ChainInfo[]>(`https://chainid.network/chains.json`)
             .then(({data}) => {
               setChains(data);
               CHAINS.splice(0, CHAINS.length, ...data);
             });
      else setChains(CHAINS);
    }());

  }, [])

  function getChain(c?: Partial<ChainInfo>) {
    return chains.find(({name, network, chainId}) =>
                         name ? c.name === name : network ? c.network === network : chainId ? chainId === c.chainId : false);
  }

  return {chains, getChain, currentChain, updateCurrentChain};
}
