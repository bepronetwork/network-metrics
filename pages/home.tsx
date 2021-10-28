import Container from '@components/container';
import Row from '@components/row';
import Column from '@components/column';
import NavBar from '@components/nav-bar';
import PageHeader from '@components/page-header';
import CirculatingSupply from '@components/circulating-supply';
import DistributedEpoch from '@components/distributed-epoch';
import TransactionalData from '@components/transactional-data';

export default function HomePage() {
  return <>
    <NavBar />
    <PageHeader />
    <Container background="body">
      <Row>
        <CirculatingSupply />
        <DistributedEpoch />
      </Row>
      <Row>
        <Column className="bg-shadow rounded">
          <h4 className="mb-3">Protocol metrics</h4>
          <Row>
            <TransactionalData />
            <Column>hey</Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </>
}
