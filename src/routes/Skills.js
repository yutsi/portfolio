import { React } from 'react'
import { Container, Row } from 'react-bootstrap'

function Skills () {
  return (
    <Container>
      <Row sm='auto' className='justify-content-center skills-content pt-4'>
        <ul className='no-bullets'>
          <li><b>Languages</b>: JavaScript/TypeScript, Python, Java</li>
          <li><b>Front-end</b>: React, Angular, HTML, CSS,
            Bootstrap, Sass
          </li>
          <li><b>Back-end</b>: Node.js, Express, Git, Jest</li>
          <li><b>Databases</b>: SQL Server, MongoDB, GraphQL</li>
        </ul>
        <span className='skills-text'>I develop web applications using React and Node.js with TypeScript/JavaScript. I have integrated front-end interfaces with REST APIs using SQL Server and MongoDB databases, as well as GraphQL APIs. For React apps, I have developed responsive mobile-friendly UIs using CSS and Bootstrap with a focus on accessibility. I also write component tests using Jest and React Testing Library to ensure a seamless user experience. Feel free to connect with me on <a href='https://www.linkedin.com/in/wyattlucas/' className='link-dark'>LinkedIn</a>.</span>
      </Row>
    </Container>
  )
}

export default Skills
