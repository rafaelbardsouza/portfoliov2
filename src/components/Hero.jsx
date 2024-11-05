import { useState } from "react"

import '../styles/hero.scss'

export default function Hero(props) {

    const [imgSrc, setImgSrc] = useState('https://archives.bulbagarden.net/media/upload/5/55/Spr_5b_384.png')

    const changeImg = () => {
        setImgSrc('https://archives.bulbagarden.net/media/upload/1/1b/Spr_4d_384.png')
        setTimeout(() => {
        setImgSrc('https://archives.bulbagarden.net/media/upload/5/55/Spr_5b_384.png')
        }, 2000);
    }

    return (
    <section id='hero'>
        <div className='info'>
          <h1>Hello, I am Rafael,<br/><bold>Full-Stack</bold> Developer</h1>
          <p>Based in Brazil, initially I started programming in Java as a thirteen years old. Currently, I am 19 years old midway through a Software Engineering degree at university, while also working full-time as a Full-Stack and Mobile Developer at TopInvest Educação Financeira.</p>
          <div className='buttons'>
            <button>Contact</button>
            <img onMouseEnter={changeImg} src={imgSrc}/>
          </div>
        </div>
      </section>
    )
}