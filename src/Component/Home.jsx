import React from 'react' 
import "./Style.css"
import img2 from "./Assets/furni1.jpg"
import img3 from "./Assets/furni2.jpg"
import img4 from "./Assets/furni3.jpg"
import img5 from "./Assets/furni4.jpg"

//import {Carousel} from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
  return (
       <div className='hi'>
   <div className='pp'>
      <h2>Make Your Interior More Minimalistic & Modern</h2>
      <p className='white'>Degital marketing can feel a bit like a buffer that has wa too many option.</p>
   </div>

  <div className='slider-img'>
    <Carousel interval={500}>
      <Carousel.Item >
        <img
          src={img2} height="400px" width={400}
          alt="First slide"  id="slide"
        />
    </Carousel.Item>
      <Carousel.Item >
        <img
          src={img3} height="400px" width={400}
          alt="Second slide"  id="slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          src={img4} height="400px" width={400}
          alt="Third slide" id="slide"
        />
      </Carousel.Item>
    <Carousel.Item >
        <img
          src={img5} height="400px" width={400}
          alt="Third slide" id="slide"
        />
      </Carousel.Item>
    </Carousel>
</div>

    
    </div>
  
  )
}

export default Home