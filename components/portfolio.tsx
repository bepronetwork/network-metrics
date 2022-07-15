import Column from '@components/column';
import styles from '@styles/components/portfolio.module.scss';
import Row from '@components/row';
import IconPlus from '@icons/IconPlus';
import useBEPRO from '@x-hooks/use-bepro';
import Number from '@components/Number';
import Button from '@components/button';
import DataBit from '@components/data-bit';
import useNumbers from '@x-hooks/use-numbers';
import IconBepro from '@icons/IconBepro';

export default function Portfolio() {
  const {numberToString} = useNumbers();
  const {claimAmount} = useBEPRO();

  function renderDataBit({value, smallCaption, caption}, i) {
    const captionIcon = <span className="color-primary"><IconBepro /></span>;
    const options = {noPadding: false, center: false, value, smallCaption, caption, captionIcon, border: i < 3}
    return <DataBit {...options} />
  }

  return <Column className={styles.portfolio}>
    <Row>
      <div className="d-flex justify-content-between w-100">
        <div className="mr-auto">
          <h4 className="pb-2">Portfolio</h4>
          <div className="caption-small color-gray">track balances</div>
        </div>
        <div className={`${styles.claimer} d-flex justify-content-between align-self-center`}>
          <div>
            <div className="w-100 text-center">
              <div className="caption-small"><span className="color-success mr-2"><IconPlus /></span> rewards</div>
              <div className="caption"><Number value={claimAmount} nScale={claimAmount > 9999999} currency="$BEPRO" /></div>
            </div>
          </div>
          <div className="d-flex align-self-center">
            <Button disabled={true}>claim</Button>
          </div>
        </div>
      </div>
    </Row>
    <Row className="h-100">
      <div className="d-flex align-self-end w-100">
        <Row className="w-100">
          <DataBit noPadding={false} center={false} colSize={4} border={true} smallCaption="wallet" caption={numberToString(0)} captionIcon={<span className="color-primary"><IconBepro /></span>} />
          <DataBit noPadding={false} colSize={4} border={true} smallCaption="staked" caption={numberToString(0)} captionIcon={<span className="color-primary"><IconBepro /></span>} />
          <DataBit noPadding={false} colSize={4} smallCaption="withdrawable" caption={numberToString(0)} captionIcon={<span className="color-primary"><IconBepro /></span>} />
        </Row>
      </div>
    </Row>
  </Column>
}
