import Layout from "../Layouts/Layout";
import Image from "next/image";
import picLin from '../../public/images/linkedin.png';
import picMail from '../../public/images/mail.png';
import { FaFilePdf } from "react-icons/fa";
import Notiflix from "notiflix";
import Head from 'next/head';



const Contacto = () => {


  const handleCopy = () => {
    navigator.clipboard.writeText("developerfer@hotmail.com");
    Notiflix.Report.success("Mail", "Mi correo electronico ya esta copiado en su portapapeles", 'Aceptar');
  }

  return (
    <Layout>
        <Head>
          <title>Contacto</title>
        </Head>
        <div className="d-flex justify-content-center align-items-center flex-column text-white">
          
            <h1 className="p-2 fw-bold text-center">Contactos directos</h1>
          <div className="d-flex justify-content-center flex-sm-row flex-column align-items-center mb-5">
            <a href="https://www.linkedin.com/in/fernando-olguin-5a63a9236/" target="_blank" className="text-decoration-none m-0 p-0">
              <Image
                src={picLin}
                alt="linkedin"
                width={110}
                height={110}
              />
            </a>

            <Image
              src={picMail}
              alt="linkedin"
              width={128}
              height={128}
              onClick={handleCopy}
              className="envelope"
            />
          </div>
          <h2 className="fw-bold mt-2 mb-3 text-center">Hoja de vida</h2>
          <a className="text-decoration-none btn btn-md btn-dark shadow border border-1 border-secondary mt-3" target="_blank" href="https://drive.google.com/file/d/1XXiRB6N2DEC5VSsyNY6AaSFPX22gKE_M/view?usp=sharing">Visualizar CV en drive<FaFilePdf className="text-danger ms-2 mb-1"/></a>
        </div>
    </Layout>
  )
}

export default Contacto