import Head from 'next/head';
import Layout from './Layouts/Layout';
import {AiOutlineUser, AiOutlineRead, AiOutlineSolution} from 'react-icons/ai';

export default function Home() {
  return (
    <Layout className="container">
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className='d-flex justify-content-start align-items-center flex-column text-white fw-bold p-1'>
        <h1 className='mb-3 fw-bold'>Bienvenido a mi Portfolio</h1>
        <p className='fs-4 mt-3 text-break'><AiOutlineUser className='mb-1 text-orange'/> Mi nombre es Fernando, soy desarrollador web y analista bursátil. Me considero un apasionado de los diseños,
        la programación y los deportes extremos, soy alguien que constantemente está
        aprendiendo algo nuevo, ya sea de la profesión o algún hobby. Me gustan los desafíos
        y mis fuertes son la perseverancia y la flexibilidad para adaptarme a las situaciones
        que se me presenten. 
        </p>
        <p className='fs-4 mt-1 text-break'><AiOutlineRead className="mb-1 text-orange me-2"/>Ambas profesiones decidí estudiarlas y terminarlas de manera autodidacta por el hecho de que al tener la disponibilidad horaria para investigar, elaborar y armar correctamente el plan de estudios, podía estudiar de manera óptima, eficaz y personalizada a la vez que ponía en práctica todo el conocimiento adquirido.</p>
        <p className='fs-4 mt-1 text-break'><AiOutlineSolution className="mb-1 text-orange me-1"/>Te invito a visitar las demás secciones de mi página web. En tales secciones encontrarás todo lo referido a mi conocimiento sobre la profesión, algunos de mis proyectos y la forma de contactarme en caso que lo necesites.</p>

      </div>
      
    </Layout>
  )
}
