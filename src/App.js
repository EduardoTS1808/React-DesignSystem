import './App.css';
import Display from './components/Display/Display'
import Container from './components/Container/Container';
import Card from './components/Card/Card';
import Alert from './components/Alerts/Alert';
import Button from './components/Button/Button';
import Image from './components/Images/Images';




function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Display size="medium"/>
        
  <Button primary="false" backgroundColor="blue" size="large" label="enviar"/>
      <Container>
  <Alert message=" tudo certo" type="success"/>
  <Card title="Card Titulo" content=" Exemplo de exibição de texto content." />
  <Image
  src="https://via.placeholder.com/150"
  alt="Placeholder Image"
  width="150px"
  height="150px"
  borderRadius="8px"
/>
</Container>

<Container fluid>
  <Card title="Card Titulo" content=" Exemplo de exibição de texto content." />
</Container>

      </header>
    </div>
      
  );
}

export default App;
