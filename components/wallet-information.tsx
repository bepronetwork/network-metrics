import styles from '@styles/components/wallet-information.module.scss';
import Circle from '@components/Circle';
import WalletAddress from '@components/wallet-address';
import useBEPRO from '@x-hooks/use-bepro';
import {useEffect} from 'react';

export default function WalletInformation() {
  const {currentAddress, balance} = useBEPRO();

  useEffect(() => {
    console.log(balance)
  }, [balance])

  return <div className={styles.container}>
    <div className="d-flex align-items-center justify-content-between">
      <div className="mr-2 text-center">
        <div><WalletAddress address={currentAddress} /></div>
        <div><span className="caption-small">{balance}</span></div>
      </div>
      <div><Circle width={38} height={38} className="bg-body">hey</Circle></div>
    </div>
  </div>
}
