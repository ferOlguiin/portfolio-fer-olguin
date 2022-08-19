import Layout from "../Layouts/Layout"
import Image from "next/image";
import picPng from '../../public/images/folder.png';
import { BsGithub } from "react-icons/bs";
import Head from "next/head";

const Proyectos = () => {
  return (
    <Layout>
      <Head>
          <title>Proyectos</title>
        </Head>
      <h1 className="text-center text-white fw-bold mb-3">Visitá algunos de mis proyectos</h1>
        <div className="container d-flex justify-content-center flex-sm-row flex-column align-items-center">
            <div className="container-fluid d-flex flex-column align-items-center m-1">
              <a className="text-decoration-none" href="https://app-post-more-image.herokuapp.com/" rel="noreferrer" target="_blank">
                <Image
                  className="imgProyect"
                  src={picPng}
                  alt="image"
                  width={200}
                  height={200}
                />
                </a>
                <h5 className="text-center text-white fw-bold text-break">Proyecto: CRUD con M-E-R-N</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/mern-stack-crud-image" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
            <div className="container-fluid d-flex flex-column align-items-center m-1">
              <a className="text-decoration-none" href="https://ferolguiin.github.io/Sorteo_Simple/" rel="noreferrer" target="_blank">
                <Image
                  className="imgProyect"
                  src={picPng}
                  alt="image"
                  width={200}
                  height={200}
                />
                </a>
                <h5 className="text-center text-white fw-bold text-break">Proyecto: Sorteo JS</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/Sorteo_Simple" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
            <div className="container-fluid d-flex flex-column align-items-center m-1">
              <a className="text-decoration-none" href="https://ferolguiin.github.io/Conversor-de-numeros-romanos/" rel="noreferrer" target="_blank">
                <Image
                  className="imgProyect"
                  src={picPng}
                  alt="image"
                  width={200}
                  height={200}
                />
              </a>
              <h5 className="text-center text-white fw-bold text-break">Proyecto: Conversor romano</h5>
              <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/Conversor-de-numeros-romanos" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
            
            
        </div>
        <div className="container d-flex justify-content-center flex-sm-row flex-column align-items-center mt-2">
            <div className="container-fluid d-flex flex-column align-items-center m-1">
              <a className="text-decoration-none" href="https://ferolguiin.github.io/React-Api-Pagination/" rel="noreferrer" target="_blank">
                <Image
                  className="imgProyect"
                  src={picPng}
                  alt="image"
                  width={200}
                  height={200}
                />
              </a>
              <h5 className="text-center text-white fw-bold text-break">Proyecto: Consumo de Api-Paginacion con React</h5>
              <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/React-Api-Pagination" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
            <div className="container-fluid d-flex flex-column align-items-center m-1">
              <a className="text-decoration-none" href="https://node-express-mongo-crud1.herokuapp.com/" rel="noreferrer" target="_blank">
                <Image
                  className="imgProyect"
                  src={picPng}
                  alt="image"
                  width={200}
                  height={200}
                />
              </a>
              <h5 className="text-center text-white fw-bold text-break">Proyecto: CRUD con NodeJs-Express-MongoDB-Handlebars</h5>
              <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/nodejs-express-hbs-mongodb-crud" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
            <div className="container-fluid d-flex flex-column align-items-center m-1">
              <a className="text-decoration-none" href="https://nextjs-app-auth.vercel.app/login" rel="noreferrer" target="_blank">
                <Image
                  className="imgProyect"
                  src={picPng}
                  alt="image"
                  width={200}
                  height={200}
                />
              </a>
              <h5 className="text-center text-white fw-bold text-break">Proyecto: App con Nextjs y NextAuth</h5>
              <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/nextjs-app-auth" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Proyectos