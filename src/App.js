import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NItemsPerSlideCarousel from './components/NItemsPerSlideCarousel';
import DarkVariantDynamicCarousel from './components/DarkVariantDynamicCarousel';

import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
      <DarkVariantDynamicCarousel/>
      {/* <NItemsPerSlideCarousel/> */}
      </Row>
    </Container>
  );
}

export default App;
