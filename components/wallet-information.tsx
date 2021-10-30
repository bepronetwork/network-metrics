import styles from '@styles/components/wallet-information.module.scss';
import Circle from '@components/Circle';
import WalletAddress from '@components/wallet-address';
import useBEPRO from '@x-hooks/use-bepro';
import Number from '@components/Number';

export default function WalletInformation() {
  const {currentAddress, balance} = useBEPRO();


  return <div className={styles.container}>
    <div className="d-flex align-items-center justify-content-between">
      <div className="mr-2 text-center">
        <div><WalletAddress address={currentAddress} /></div>
        <div className="caption-small">
          <Number value={+(+balance)?.toFixed(2)} currency="MOVR" nScale={true} />
        </div>
      </div>
      <div><Circle width={38} height={38} className="bg-body">hey</Circle></div>
    </div>
  </div>
}
