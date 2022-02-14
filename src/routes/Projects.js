import { React } from 'react'
import { Container, Row } from 'react-bootstrap'
import projectsList from '../content/projectsList'
import ProjectContainer from '../components/ProjectContainer'

function Projects () {
  return (
    <Container>
      <Row xs={1} md={2} className='g-4'>
        {projectsList
          .map(projects => <ProjectContainer key={projects.title} project={projects} />)}
      </Row>
    </Container>
  )
}

export default Projects
