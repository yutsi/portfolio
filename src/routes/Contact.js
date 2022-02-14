import React from 'react'
import { Container } from 'react-bootstrap'
// unused route, Contact tab just links to the site because implementing a new contact form is too much effort.
function Contact () {
  return (
    <Container>
      You can reach me by email using <a href='https://yut.si/contact/'>this form</a>.
    </Container>
  )
}

export default Contact
