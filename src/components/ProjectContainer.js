import React from 'react'
import { ListGroup, Card, Col } from 'react-bootstrap'
import ProjectDescription from './ProjectDescription'

const ProjectContainer = (project) => {
  const title = Object.values(project)[0].title
  const stack = Object.values(project)[0].stack
  let lines = Object.values(project)[0].description.replaceAll('. ', '.. ') // so that the period isn't stripped during split()
  lines = lines.split('. ') // split description into lines
  const url = Object.values(project)[0].url
  const github = Object.values(project)[0].github
  return (
    <Col>
      <Card className='project-card'>
        <Card.Body>
          <Card.Title className='fs-3'>{title}</Card.Title>
          <Card.Subtitle><span className='fw-normal'>Stack:</span> {stack}</Card.Subtitle>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          {lines
            .map(line => <ProjectDescription key={line} lines={line} />)}
        </ListGroup>
        <Card.Body>
          {url
            ? <Card.Link href={url}>URL</Card.Link>
            : null}
          <Card.Link href={github}>GitHub</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  )
  // use thumbnail logo for Github?
}

export default ProjectContainer
