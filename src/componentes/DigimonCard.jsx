import {Card, CardImg, CardText, CardTitle} from "react-bootstrap";
function DigimonCard(props){
    return(
        <Card>
            <CardImg variant="top" src={props.img}/>
            <Card.Body>
                <CardTitle>{props.nombre}</CardTitle>
                <CardText>Nivel: {props.nivel}</CardText>
            </Card.Body>
        </Card>
    );
}
export default DigimonCard;