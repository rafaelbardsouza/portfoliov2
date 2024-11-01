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
          <h1>Hello, i am Rafael,<br/><bold>Full-Stack</bold> Developer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam augue tristique, tempor magna a, laoreet felis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <div className='buttons'>
            <button>Contact</button>
            <img onMouseEnter={changeImg} src={imgSrc}/>
          </div>
        </div>
      </section>
    )
}