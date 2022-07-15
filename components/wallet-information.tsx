import styles from '@styles/components/wallet-information.module.scss';
import WalletAddress from '@components/wallet-address';
import useBEPRO from '@x-hooks/use-bepro';
import Number from '@components/Number';
import useChainInfo from '@x-hooks/use-chain-info';

export default function WalletInformation() {
  const {currentAddress, balance} = useBEPRO();
  const {currentChain} = useChainInfo();

  return <div className={styles.container}>
    <div className="d-flex align-items-center justify-content-between">
      <div className="text-center w-100">
        <div><WalletAddress address={currentAddress} /></div>
        <div className="caption-small">
          <Number value={+(+balance)?.toFixed(2)} currency={currentChain?.nativeCurrency?.symbol} nScale={true} />
        </div>
      </div>
    </div>
  </div>
}
