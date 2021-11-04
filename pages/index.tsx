import Row from '@components/row';
import Column from '@components/column';
import CirculatingSupply from '@components/circulating-supply';
import DistributedEpoch from '@components/distributed-epoch';
import Metric, {makeMetricItem, MetricItem} from '@components/metric';
import {useEffect, useState} from 'react';
import RewardMetrics from '@components/reward-metrics';

export default function HomePage() {
  const [transactionalMetrics, setTransactionalMetrics] = useState<MetricItem[]>([]);
  const [liquidityMetrics, setLiquidityMetrics] = useState<MetricItem[]>([]);

  useEffect(() => {
    setTransactionalMetrics([
                              makeMetricItem(`4.2M`, `$USDC`),
                              makeMetricItem(`42K`, `$BEPRO`),
                              makeMetricItem(`42M`, `total`),
                              makeMetricItem(`4.2%`, `your stake`),])

    setLiquidityMetrics([
                          makeMetricItem(`42M`, `$USDC`),
                          makeMetricItem(`4.2K`, `$BEPRO`),
                          makeMetricItem(`42`, `total`),
                          makeMetricItem(`.42%`, `your stake`),])
  }, []);

  return <>
    <Row>
      <CirculatingSupply/>
      <DistributedEpoch/>
    </Row>
    <Row>
      <Column className="bg-shadow">
        <h4 className="mb-3">Protocol metrics</h4>
        <Row>
          <Metric title="Transactional" metrics={transactionalMetrics}/>
          <Metric title="Liquidity Locked" metrics={liquidityMetrics}/>
        </Row>
      </Column>
    </Row>
    <Row>
      <RewardMetrics />
    </Row>
  </>
}
