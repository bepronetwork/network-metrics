import Row from '@components/row';
import Portfolio from '@components/portfolio';
import Column from '@components/column';
import CirculatingSupply from '@components/circulating-supply';
import DistributedEpoch from '@components/distributed-epoch';

export default function AccountPage() {
  return <>
    <Row>
      <Portfolio />
      <Column className="p-0">
        <Row>
          <CirculatingSupply />
        </Row>
        <Row>
          <DistributedEpoch />
        </Row>
      </Column>
    </Row>
  </>
}
