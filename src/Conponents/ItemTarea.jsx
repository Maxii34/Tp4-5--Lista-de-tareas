import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({tarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-content-center shadow bg-light">
       {tarea} <Button variant="secondary">❌</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
