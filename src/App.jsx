import Desciption from './component/Desciption'
import Name from './component/Name'
import Price from './component/Price'
import Image from './component/Image'
import Card from 'react-bootstrap/Card'
import './App.css'

function App() {
  
  return (
    <>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = {<Image/>} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Price/>
        <Card.Text>
          <Desciption/>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    </>
  )
}

export default App
