import {useEffect, useState} from 'react';
import {Network, Application} from 'bepro-js';

const options = {opt: {web3Connection: process.env.NEXT_PUBLIC_WEB3_CONNECTION},}

const networkOptions = {
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  ...options
}

const bepro = new Application(options);
const network = new Network(networkOptions);
let started = false;

export default function useBEPRO() {
  const [currentAddress, setCurrentAddress] = useState(``);
  const [supply, setSupply] = useState(0);
  const [distributedAmount, setDistributionAmount] = useState(0);
  const [countdownDate, setCountdownDate] = useState(0);
  const [rewardPoolAmount, setRewardPoolAmount] = useState(0);
  const [stakedAmount, setStakedAmount] = useState(0);
  const [walletAmount, setWalletAmount] = useState(0);
  const [claimAmount, setClaimAmount] = useState(0);
  const [balance, setBalance] = useState(``);

  async function login() {
    let success;

     try {
       success = await bepro.login();
     } catch (e) {
       success = false;
       console.debug(`Failed to login`, e);
     }

     if (!success)
       return;

     setCurrentAddress(await bepro.getAddress());
  }

  function start() {
    (async function startOrLogin() {

      if (!started) {
        await bepro.start();
        await network.login();
        await network.__assert();
        started = true;
      } else await bepro.getAddress().then(setCurrentAddress);

      setSupply(await network.getSettlerTokenContract().totalSupply());

    }())
  }

  function updateCurrentAddress() {
    (async function update() {
      if (!currentAddress)
        return;

      const {utils: {fromWei}, eth: {getBalance}} = bepro.web3;

      setBalance(fromWei(await getBalance(currentAddress), `ether`));
    }());

  }

  function updateCirculatingSupply() {}

  useEffect(start, []);
  useEffect(updateCurrentAddress, [currentAddress]);

  return {
    currentAddress,
    balance,
    supply,
    claimAmount,
    login,
    web3: bepro.web3
  }
}
