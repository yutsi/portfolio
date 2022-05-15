import { Container, Row } from 'react-bootstrap'
import projectsList from '../content/projectsList'
import ProjectContainer from '../components/ProjectContainer'

function Projects () {
  return (
    <Container>
      <Row xs={1} md={2} className='g-4'>
        {projectsList
          .map(p => <ProjectContainer key={p.title} project={p} />)}
      </Row>
    </Container>
  )
}

export default Projects
