import Container from '@components/container';
import Row from '@components/row';
import Column from '@components/column';
import NavBar from '@components/nav-bar';

export default function HomePage() {
  return <>
    <NavBar />
    <Container background="body">
      <Row>
        <Column>
          <Container>
            <Row>
              <Column>Hey you</Column>
            </Row>
          </Container>
        </Column>
        <Column>Hey 2</Column>
      </Row>
      <Row>
        <Column>
          <Container>
            <Row><Column>Hey 3</Column></Row>
          </Container>
        </Column>
      </Row>
    </Container>
    </>
}
