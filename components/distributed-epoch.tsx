import Column from '@components/column';
import Number from '@components/Number';

export default function DistributedEpoch() {
  return <Column className="bg-shadow position-relative rounded">
    <h4>Distributed this epoch</h4>
    <h4 className="pt-4 color-white"><Number value={42760.42} currency="$BEPRO" /></h4>
  </Column>
}
