
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormularioContato from "../components/FormularioContato";

const Contato = () => {
  return (
      <>
      <Header />

       <main className="flex flex-col items-center bg-creme px-5 py-10 ">
        <div>  
          <h1 className="font-titulo text-4xl font-extrabold text-petroleo sm:text-5xl">Fale Conosco</h1>
          <p className="mb-7 mt-3 max-w-md text-center text-lg text-cinza">Entre em contato com nossa equipe.</p>
        </div>

        <FormularioContato />
      </main>

      <Footer />
    </>
  )
}

export default Contato





