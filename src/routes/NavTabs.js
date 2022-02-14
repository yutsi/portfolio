import { Nav, Navbar } from 'react-bootstrap'
import { React } from 'react'
import { useLocation, Link } from 'react-router-dom'

function NavTabs () {
  return (
    <Navbar>
      <Nav variant='tabs' activeKey={useLocation().pathname}>
        <Nav.Item>
          <Nav.Link as={Link} to='/'>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='https://yut.si/'>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='https://yut.si/contact/'>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default NavTabs
