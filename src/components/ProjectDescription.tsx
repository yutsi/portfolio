import { ListGroupItem } from 'react-bootstrap'

interface Props {
  line: string
  key: string
}

const ProjectDescription = (props: Props) => {
  return (
    <ListGroupItem>{props.line}</ListGroupItem>
  )
}

export default ProjectDescription
