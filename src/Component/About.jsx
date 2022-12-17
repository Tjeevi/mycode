import React from 'react'
import  Card  from 'react-bootstrap/Card'
import anime1 from "./Assets/card1.jfif"
import anime2 from "./Assets/card2.jfif"
import anime3 from "./Assets/card3.jfif"
function About() {
  return (
    <div>

    <div className='cd'>
        <h2>About </h2> 
       <p className='abt'> Whether you’re a new company or an established brick and mortar furniture business – here at IceCube Digital, we design and help you manage your eCommerce store with easy to use furniture ecommerce website development solutions. Give your customers the power to renovate and upgrade their homes and offices right from their computers, while you boost your sales from a new sales channel that increases your ROI.

       </p> </div>

   <div className='row'>
    <div className='col-lg-3 col-sm-12'>
    <Card className='car'>
      <Card.Img variant="top" src={anime1} />
      <Card.Body>
        <Card.Title className='tit'>Dining Table</Card.Title>
        <Card.Text className='cardp'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
    <div className='col-lg-3 col-sm-12'>
    <Card className='car'>
      <Card.Img variant="top" src={anime2} /><br></br>
      <Card.Body>
        <Card.Title className='tit'>Cot</Card.Title>
        <Card.Text className='cardp'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
    <div className='col-lg-3 col-sm-12'>
    <Card className='car'>
      <Card.Img variant="top" src={anime3}/>
      <Card.Body>
        <Card.Title className='tit'>Dressing Table</Card.Title>
        <Card.Text className='cardp'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
   </div>


   </div>
  )
}

export default About