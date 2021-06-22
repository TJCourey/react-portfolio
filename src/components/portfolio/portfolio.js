import React from 'react'
import Card from 'react-bootstrap/Card'

function Portfolio() {
    const projectInfo = [
        {id:1 ,image: "", title:"", desc:"", deploy:"", github:""},
        {id:2 ,image: "", title:"", desc:"", deploy:"", github:""},
        {id:3 ,image: "", title:"", desc:"", deploy:"", github:""},
        {id:4 ,image: "", title:"", desc:"", deploy:"", github:""},
        {id:5 ,image: "", title:"", desc:"", deploy:"", github:""},
        {id:6 ,image: "", title:"", desc:"", deploy:"", github:""}
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
