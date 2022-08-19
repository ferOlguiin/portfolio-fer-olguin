import Layout from "../Layouts/Layout"
import Image from 'next/image';
import img from '../../public/images/sv2.png';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaBootstrap, FaGitSquare, FaGithub } from "react-icons/fa";
import { DiMongodb, DiNpm, DiVisualstudio } from 'react-icons/di';
import Head from "next/head";

const Habilidades = () => {
  return (
    <Layout>
      <Head>
          <title>Habilidades</title>
        </Head>
      <div className="container">
        <div className="row">
          <div className="col-sm-7 d-flex justify-content-center align-items-start flex-column text-white">
            <h1 className="text-white fw-bold">Conocimiento técnico y habilidades</h1>
              <h4 className="fw-bold mt-3">Desarrollo FrontEnd (cliente)</h4>
                  <ul className="p-0 m-0 fs-6">
                    <li>HTML5 - CSS3 (FlexBox – CssGrid - ResponsiveWebDesign)</li>
                    <li>BOOTSTRAP || TAILWINDCSS || MATERIALUI || STYLED-COMPONENTS</li>
                    <li>JAVASCRIPT || TYPESCRIPT</li>
                    <li>REACT.JS || NEXT.JS </li>
                  </ul>
              <h4 className="fw-bold mt-3">Desarrollo BackEnd (servidor)</h4>
                  <ul className="p-0 m-0 fs-6">
                    <li>NODE.JS</li>
                    <li>EXPRESS</li>
                    <li>MONGODB || MONGOOSE</li>
                    <li>API || REST API</li>
                  </ul>
              <h4 className="fw-bold mt-3">Control de versiones & Testing & Programas</h4>
                  <ul className="p-0 m-0 fs-6">
                    <li>GIT || GITHUB</li>
                    <li>JEST || SUPERTEST</li>
                    <li>VISUAL STUDIO CODE || SUBLIME TEXT</li>
                  </ul>
                

          </div>
          <div className="col-sm-5 d-flex justify-content-center align-items-center">
              <Image
                src={img}
                alt="imageHab"
                width={500}
                height={450}
              />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 d-flex justify-content-sm-around justify-content-center flex-wrap aling-items-center">
            <FaHtml5 className="fs-1 text-danger"/>
            <FaReact className="fs-1 text-info"/>
            <FaCss3Alt className="fs-1 text-primary"/>
            <FaJsSquare className="fs-1 text-warning"/>
            <FaNode className="fs-1 text-success"/>
            <FaBootstrap className="fs-1 text-violet"/>
            <FaGitSquare className="fs-1 text-orange"/>
            <FaGithub className="fs-1 text-white"/>
            <DiMongodb className="fs-1 text-success"/>
            <DiNpm className="fs-1 text-orange"/>
            <DiVisualstudio className="fs-1 text-primary"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Habilidades