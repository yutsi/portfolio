import { Nav, Navbar } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'

function NavTabs () {
  return (
    <Navbar className='navbar-dark'>
      <Nav variant='tabs' activeKey={useLocation().pathname} className='fs-5'>
        <Nav.Item>
          <Nav.Link as={Link} to='/'>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/skills'>Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='https://yut.si/' target='_blank'>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='https://yut.si/contact/' target='_blank'>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default NavTabs
