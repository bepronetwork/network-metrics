import Column from '@components/column';
import Row from '@components/row';

export default function RewardMetrics() {

  return <Column className="bg-shadow">
    <h4 className="mb-3">Rewards Metrics</h4>
    <div className="caption-small">Earn rewards for using and staking on the bepro network PROTOCOL</div>
    <Row>
      <Column className="bg-dark-gray">
        <h4 className="mb-4">Countdown</h4>
        <h4>42d 42h 42m</h4>
        <div className="caption-small color-gray">until the next epoch on <span className="color-primary">SEPTEMBER 28</span>.</div>

      </Column>
      <Column className="bg-dark-gray">
        <h4 className="mb-4">Reward Pool</h4>
        <h4>42 <span className="color-primary">$BEPRO</span></h4>
        <div className="caption-small color-gray">will be distributed this epoch.</div>
      </Column>
    </Row>
  </Column>
}
