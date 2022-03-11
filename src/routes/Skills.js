import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
      </Row>
    </Container>
  )
}

export default Skills
