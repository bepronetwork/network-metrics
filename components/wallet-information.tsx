import styles from '@styles/components/wallet-information.module.scss';
import Circle from '@components/Circle';
import WalletAddress from '@components/wallet-address';

export default function WalletInformation() {
  return <div className={styles.container}>
    <div className="d-flex align-items-center justify-content-between">
      <div className="mr-2 text-center">
        <div><WalletAddress address="0x0e6B6ae33f345E1CbAc096a2644f7748F347d218" /></div>
        <div><span className="caption-small">999 MOVR</span></div>
      </div>
      <div><Circle width={38} height={38} className="bg-body d-flex justify-content-center align-items-center">hey</Circle></div>
    </div>
  </div>
}
