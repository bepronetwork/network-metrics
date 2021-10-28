import Circle from '@components/Circle';
import IconUSDC from '@icons/IconUSDC';
import Row from '@components/row';
import Column from '@components/column';

export default function TransactionalData() {
  return <Column className="bg-dark-gray">
    <h4 className="d-flex justify-content-between color-white mb-3">
      <span>Transactional</span>
      <Circle className="color-white bg-primary" width={24} height={24}><IconUSDC /></Circle>
    </h4>
    <Row>
      <Column size={3} className="text-center border-right border-light-dark-gray py-2 px-0">4.2M</Column>
      <Column size={3} className="text-center border-right border-light-dark-gray py-2 px-0">42K</Column>
      <Column size={3} className="text-center border-right border-light-dark-gray py-2 px-0">$4.2M</Column>
      <Column size={3} className="text-center py-2 px-0">4.2%</Column>
    </Row>
  </Column>
}
