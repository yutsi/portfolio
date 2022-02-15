import { Routes, Route } from 'react-router-dom'
import Header from './routes/Header'
import Footer from './routes/Footer'
import NavTabs from './routes/NavTabs'
import About from './routes/About'
import Projects from './routes/Projects'
import { Container, Row, Col } from 'react-bootstrap'
import './custom.scss'

function App () {
  return (
    <Container fluid>
      <Row lg='auto' className='align-items-center justify-content-center'>
        <Col>
          <Header />
        </Col>
        <Col>
          <NavTabs />
        </Col>
      </Row>
      <Row />
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Projects />} />
      </Routes>
      <Row md='auto' className='align-items-center justify-content-center pt-5'>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
