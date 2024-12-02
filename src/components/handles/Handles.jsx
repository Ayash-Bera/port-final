import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/ayash-bera-595ab92b8/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://x.com/AyashBera" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/Ayash-Bera" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles
