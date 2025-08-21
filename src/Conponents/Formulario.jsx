import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ListaTarea from "./Listatarea";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const tareasLocalstorage =
    JSON.parse(localStorage.getItem("tareaskey")) || [];
  const [tareas, setTareas] = useState(tareasLocalstorage);

  useEffect(() => localStorage.setItem("tareaskey", JSON.stringify(tareas)),
    [tareas]
  );

  const agregarTarea = (data) => {
    const nuevas = [...tareas, data.tarea]; // crea el nuevo array con la tarea
    setTareas(nuevas); // actualiza el estado
    reset({ tarea: "" }); // limpia el input 
  };


const borrarTarea = (nombreTarea)=>{
  const tareasFiltradas = tareas.filter((ItemTarea)=> ItemTarea !== nombreTarea ) 
  setTareas(tareasFiltradas)
}

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
        <div  className="border rounded p-4 shadow w-auto">  
          <h2 className="text-center mb-3">Bienvenido</h2>
          <p className="text-center">Ingresa tus tareas</p>

          <Form
            onSubmit={handleSubmit(agregarTarea, (errors) => {
              Swal.fire("Error", "Completa todos los datos.", "error");
            })}
          >
            <Form.Group className="mb-3 d-flex gap-2 ">
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
          <ListaTarea tareas={tareas} borrarTarea={borrarTarea} />
        </div>
    </Container>
  );
};

export default Formulario;
