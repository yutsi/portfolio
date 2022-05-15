import { ListGroup, Card, Col } from 'react-bootstrap'
import { Project } from '../content/projectsList'
import ProjectDescription from './ProjectDescription'

interface Props {
  project: Project
  key: string
}

const ProjectContainer = (props: Props) => {
  const project = props.project
  const DescriptionText: string = project.description.replaceAll('. ', '.. ') // so that the period isn't stripped during split()
  const DescriptionLines: string[] = DescriptionText.split('. ') // split description into lines
  return (
    <Col>
      <Card className='project-card'>
        <Card.Body>
          <Card.Title className='fs-3'>{project.title}</Card.Title>
          <Card.Subtitle><span className='fw-normal'>Stack:</span> {project.stack}</Card.Subtitle>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          {DescriptionLines
            .map(line => <ProjectDescription key={line} line={line} />)}
        </ListGroup>
        <Card.Body>
          {project.url
            ? <Card.Link href={project.url}>URL</Card.Link>
            : null}
          <Card.Link href={project.github}>GitHub</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  )
  // use thumbnail logo for Github?
}

export default ProjectContainer
