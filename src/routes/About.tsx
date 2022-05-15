import pic from '../assets/me.jpg'
import { Row, Col } from 'react-bootstrap'

function About () {
  return (
    <Row md={1} lg={3}>
      <Col sm={3} md={2}>
        <img src={pic} className='img-fluid float-sm-end' alt='me' />
      </Col>
      <Col md={6} className='float-end' xs lg='4'>
        <span className='about'>
          My name's Wyatt Lucas and I'm a software engineer. I have lifelong interests in science, technology, history, and the sociological implications of such.
          I graduated from Rutgers University in August 2020 with a BA in Information Technology and Minor in Creative Writing.<br />
          In my free time, I like <a href='https://www.youtube.com/playlist?list=PL68uieaN5RaMndJTyv07qbZ7oeJWZBjGV' className='link-dark'>lifting weights</a>, running, <a href='https://www.goodreads.com/user/show/12561046-wyatt' className='link-dark'>reading books</a> (especially sci-fi and non-fiction), <a href='https://rateyourmusic.com/~yutsi' className='link-dark'>listening to music</a>, and <a href='https://trakt.tv/users/yutsi' className='link-dark'>watching TV</a>/<a href='https://anilist.co/user/yutsi/animelist' className='link-dark'>anime</a>.
          I've been vegan since January 2018.<br />
        </span>
      </Col>
    </Row>
  )
}

export default About
