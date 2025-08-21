import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ListaTarea from "./Listatarea";
import { useState } from "react";

const Formulario = () => {
  const [tareas, setTareas] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const agregarTarea = (data) => {
    setTareas([...tareas, data.tarea]); // agrega nueva tarea
    reset({ tarea: "" }); // limpia input
  };



  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={6} lg={12} className="border rounded p-4 shadow w-100">
          <h2 className="text-center mb-3">Bienvenido</h2>
          <p className="text-center">Ingresa tus tareas</p>

          <Form
            onSubmit={handleSubmit(agregarTarea, (errors) => {
              Swal.fire("Error", "Completa todos los datos.", "error");
            })}
          >
            <Form.Group className="mb-3 d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Ingresa una tarea"
                {...register("tarea", {
                  required: "La tarea es un dato obligatorio!..",
                  minLength: {
                    value: 2,
                    message: "La tarea debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "La tarea debe como máximo 50 caracteres",
                  },
                })}
              />
              <Button variant="dark" type="submit">
                Agregar
              </Button>
            </Form.Group>
            <Form.Text className="text-danger">
              {errors.tarea?.message}
            </Form.Text>
          </Form>
          <ListaTarea tareas={tareas} />
        </Col>
      </Row>
    </Container>
  );
};

export default Formulario;
