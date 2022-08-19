import Link from "next/link"
import { BsGithub, BsLinkedin, BsEnvelopeOpenFill } from "react-icons/bs";
import Notiflix from 'notiflix';
import Head from "next/head";
import Image from "next/image";
import picLogo from '../../public/images/logodef.png';

const Layout = ({children}) => {

  const handleCopyLayout = () => {
    navigator.clipboard.writeText("developerfer@hotmail.com");
    Notiflix.Report.success("Mail", "Mi correo electronico ya esta copiado en su portapapeles", 'Aceptar');
  }

  return (

    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <nav className="navbar navbar-dark bg-dark shadow-lg p-2 px-4">
            <div className="container d-flex justify-content-center align-items-center">
              <h1 className="fw-bold title display-5">FernandoOlguin</h1>
            </div>
            <div className="container d-flex justify-content-center flex-wrap align-items-center p-1">
              <Link href="/">
                <span className="border-end border-start border-2 rounded btn-hoverr border-warning m-1 px-3 py-2">Inicio</span>
              </Link>
              <Link href="/views/habilidades">
                <span className="border-end border-start border-2 rounded btn-hoverr border-warning m-1 px-3 py-2">Habilidades</span>
              </Link>
              <Link href="/views/proyectos">
                <span className="border-end border-start border-2 rounded btn-hoverr border-warning m-1 px-3 py-2">Proyectos</span>
              </Link>
              <Link href="/views/contacto">
                <span className="border-end border-start border-2 rounded btn-hoverr border-warning m-1 px-3 py-2">Contacto</span>
              </Link>
            </div>
        </nav>  


        <main className="container-fluid p-5">
            {children}
        </main>


        <footer className="bg-dark text-white p-2 d-flex justify-content-center align-items-center">

              <div className="container">
                <div className="row">
                  <div className="col-sm-6 d-flex justify-content-sm-start justify-content-center align-items-center">
                  <Image
                      src={picLogo}
                      alt="logo"
                      width={40}
                      height={25}
                      className="p-0 m-0"
                    />
                    <h6 className="p-0 m-0 text-center">Fernando Olguin - Desarrollador Web ©2022</h6>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-sm-end justify-content-center align-items-center">
                     <a href="https://github.com/ferOlguiin" rel="noreferrer" className="text-decoration-none text-white" target="_blank"><BsGithub className="fs-4 m-1"/></a>
                     <a href="https://www.linkedin.com/in/fernando-olguin-5a63a9236/" rel="noreferrer" className="text-decoration-none text-info" target="_blank"><BsLinkedin className="fs-4 m-1"/></a>
                     <BsEnvelopeOpenFill onClick={handleCopyLayout} className="fs-4 m-1 text-danger envelope" />
                  </div>
                </div>
              </div>

        </footer>
    </div>
  )
}

export default Layout