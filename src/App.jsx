import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavForm from './Conponents/nav';
import Footer from './Conponents/Footer';
import Formulario from './Conponents/Formulario';
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
