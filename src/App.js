import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DarkVariantExample from './components/DarkVariantExample';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
      <DarkVariantExample/>

      </Row>
    </Container>
  );
}

export default App;
