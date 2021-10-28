import Column from '@components/column';
import ProgressBar from '@components/progress-bar';

export default function CirculatingSupply() {
  return <Column className="bg-shadow rounded">
    <h4 className="mb-3 pb-1">Circulating Supply</h4>
    <ProgressBar value={42} max={100} label="$BEPRO"/>
  </Column>
}
