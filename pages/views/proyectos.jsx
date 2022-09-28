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
              <a className="text-decoration-none" href="https://ecommerce-example-app.herokuapp.com/" rel="noreferrer" target="_blank">
                <Image
                  className="imgProyect"
                  src={picPng}
                  alt="image"
                  width={200}
                  height={200}
                />
                </a>
                <h5 className="text-center text-white fw-bold text-break">Proyecto: E-Commerce de ejemplo</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/ecommerce-example" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
            <div className="container-fluid d-flex flex-column align-items-center m-1">
              <a className="text-decoration-none" href="https://note-app-mernproyect.herokuapp.com/" rel="noreferrer" target="_blank">
                <Image
                  className="imgProyect"
                  src={picPng}
                  alt="image"
                  width={200}
                  height={200}
                />
                </a>
                <h5 className="text-center text-white fw-bold text-break">Proyecto: App de notas</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/Note-App" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
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
        <div className="container d-flex justify-content-center flex-sm-row flex-column align-items-center mt-2">
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
              <h5 className="text-center text-white fw-bold text-break">Proyecto: CRUD con imágenes</h5>
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
              <h5 className="text-center text-white fw-bold text-break">Proyecto: App de sorteos</h5>
              <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/Sorteo_Simple" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
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
              <h5 className="text-center text-white fw-bold text-break">Proyecto: React - Api con paginación</h5>
              <div className="d-flex justify-content-center align-items-center">
                  <a className="m-0 p-0 text-decorartion-none" href="https://github.com/ferOlguiin/React-Api-Pagination" rel="noreferrer" target="_blank"><BsGithub className="text-white fs-2 mx-1"/></a>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Proyectos