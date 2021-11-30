import Row from '@components/row';
import Portfolio from '@components/portfolio';
import Column from '@components/column';
import CirculatingSupply from '@components/circulating-supply';
import DistributedEpoch from '@components/distributed-epoch';
import Metric, {makeMetricItem, MetricItem} from '@components/metric';
import {useEffect, useState} from 'react';
import RewardMetrics from '@components/reward-metrics';
import {useRouter} from 'next/router';
import useBEPRO from '@x-hooks/use-bepro';

export default function AccountPage() {
  const [transactionalMetrics, setTransactionalMetrics] = useState<MetricItem[]>([]);
  const {currentAddress, login} = useBEPRO();
  const router = useRouter();


  useEffect(() => {
    if (!currentAddress) {
      login()
           .then(logged => {
             console.log(`logged?`, logged);
             !logged && router.push(`/`);
           })
           .catch(e => {
             console.log(`E`, e)
           })
      return;
    }

    setTransactionalMetrics([
                              makeMetricItem(`4.2M`, `$USDC`),
                              makeMetricItem(`42K`, `$BEPRO`),
                              makeMetricItem(`42M`, `total`),
                              makeMetricItem(`4.2%`, `your stake`),])

  }, []);

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
    <Row>
      <Column className="bg-shadow">
        <h4 className="mb-3">Protocol metrics</h4>
        <Row>
          <Metric title="Transactional" metrics={transactionalMetrics}/>
        </Row>
      </Column>
    </Row>
    <Row>
      <Column className="bg-shadow">
        <RewardMetrics />
      </Column>
    </Row>
  </>
}
