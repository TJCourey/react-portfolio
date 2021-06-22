import React from 'react'
import Card from 'react-bootstrap/Card'

function Portfolio() {
    const projectInfo = [
        {id:1 ,image: "", title:"BandAID", desc:"A helpful application for musicians on tour", deploy:"https://fierce-beach-33317.herokuapp.com/", github:"https://github.com/AaronDMendoza/BandAid"},
        {id:2 ,image: "", title:"BeerMe", desc:"A fun application for finding new beers", deploy:"https://tjcourey.github.io/beerMe-international/", github:"https://github.com/TJCourey/beerMe-international"},
        {id:3 ,image: "", title:"Day Planner", desc:"A helpful day planner that utilizes local storage", deploy:"https://tjcourey.github.io/day-planner/", github:"https://github.com/TJCourey/day-planner"},
        {id:4 ,image: "", title:"Weather Overground", desc:"A weather application that utilizes api calls", deploy:"https://tjcourey.github.io/weather-dashboard/", github:"https://github.com/TJCourey/weather-dashboard"},
        {id:5 ,image: "", title:"Fitness Tracker", desc:"A application designed to help with fitness goals", deploy:"https://immense-castle-10334.herokuapp.com/?id=60c8c01b2c91df0015e28109", github:"https://github.com/TJCourey/fitness-tracker"},
        {id:6 ,image: "", title:"Budget Tracker", desc:"A budgeting tool that has both online and offline functionality", deploy:"https://sheltered-tundra-23663.herokuapp.com/", github:"https://github.com/TJCourey/progressive-budget"}
    ]

    const renderCard = (card) => {
      return (
        <Card className='projectCard' style={{ width: '18rem' }} key={card.id}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
            {card.desc}
            </Card.Text>
            <Button variant="primary">Github</Button>
            <Button variant="primary">Deployed</Button>
        </Card.Body>
    </Card>
      )
    }


    return (
        <div className="flex">
            {projectInfo.map(renderCard)}
        </div>
    )
}

export default Portfolio
