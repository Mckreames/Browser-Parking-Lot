import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function ParkingLotItem({id, link, description, date, priority, deleteItem}) {

    function handleDelete(e) {
        e.preventDefault();
        deleteItem(id);
    }

  return (
    <Card 
    className="my-2 parking-lot-item-container"
    color="dark"
    inverse
    >
        <CardHeader>
            { date } (priority: {priority})
            <Button color="danger" className="delete-button" onClick={handleDelete}>
                <strong>X</strong>
            </Button>
        </CardHeader>
        <CardBody>
            <CardTitle>
                {description}
            </CardTitle>
            <CardText>
                Link:&nbsp; <a href={link} target="_blank" className="parking-lot-item-anchor">
                    {link}
                </a>
            </CardText>
        </CardBody>
        <p className="parking-lot-item-field">Priority: { priority }</p>
        <p className="parking-lot-item-field">Description: { description }</p>
        <p className="parking-lot-item-field">
            Link:&nbsp;
            <a href={link} target="_blank" className="parking-lot-item-anchor">
                { link }
            </a>
        </p>
    </Card>
  );
}
