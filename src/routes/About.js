import React from 'react'
import pic from '../assets/me.jpg'
import { Row, Col } from 'react-bootstrap'

function About () {
  return (
    <Row fluid='sm' lg={3}>
      <Col>
        <img src={pic} className='text-start float-end img-fluid' />
      </Col>
      <Col className='text-start fs-5'>
        My name's Wyatt Lucas. I have lifelong interests in science, technology, history, and the sociological implications of such.
        I graduated from Rutgers University in August 2020 with a BA in Information Technology and Minor in Creative Writing.
        I'm currently pursuing a career in software engineering.
        In my free time, I like <a href='https://www.youtube.com/playlist?list=PL68uieaN5RaMndJTyv07qbZ7oeJWZBjGV' className='link-dark'>lifting weights</a>, running, <a href='https://www.goodreads.com/user/show/12561046-wyatt' className='link-dark'>reading books</a> (especially sci-fi and non-fiction), <a href='https://rateyourmusic.com/~yutsi' className='link-dark'>listening to music</a>, and <a href='https://trakt.tv/users/yutsi' className='link-dark'>watching TV</a>/<a href='https://anilist.co/user/yutsi/animelist' className='link-dark'>anime</a>.
        I've been vegan since January 2018.
      </Col>
    </Row>
  )
}

export default About
