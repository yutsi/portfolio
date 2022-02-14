import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

const ProjectDescription = (lines) => {
  const description = Object.values(lines)
  return (
    <ListGroupItem>{description}</ListGroupItem>
  )
}

export default ProjectDescription
