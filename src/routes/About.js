import React from 'react'
import pic from '../assets/me.jpg'
import { Row, Col, Container } from 'react-bootstrap'

function About () {
  return (
    <Row xs={3}>
      <Col>
        <img src={pic} className='text-start float-end img-fluid' />
      </Col>
      <Col className='text-start'>
        My name's Wyatt Lucas. I have lifelong interests in science, technology, history, and the sociological implications of such.
        I graduated from Rutgers University in August 2020 with a BA in Information Technology and Minor in Creative Writing.
        I'm currently pursuing a career in software engineering.
        In my free time, I like <a href='https://www.youtube.com/playlist?list=PL68uieaN5RaMndJTyv07qbZ7oeJWZBjGV'>lifting weights</a>, running,
        <a href='https://www.goodreads.com/user/show/12561046-wyatt'>reading books</a> (especially sci-fi and non-fiction), <a href='https://rateyourmusic.com/~yutsi'>listening to music</a>, and <a href='https://trakt.tv/users/yutsi'>watching TV</a>/<a href='https://anilist.co/user/yutsi/animelist'>anime</a>.
        I've been vegan since January 2018.
      </Col>
    </Row>
  )
}

export default About
