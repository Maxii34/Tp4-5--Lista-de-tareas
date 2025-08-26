import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Components/Footer';
import Formulario from './Components/Formulario';
import NavForm from './Components/Navformulario';
import './App.css'

function App() {

  return (
    <>
      <NavForm />
      <main>
      <Formulario />
      </main>
      <Footer />
    </>
  )
}

export default App
