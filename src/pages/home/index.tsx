import { FaGithub, FaInstagram, FaLinkedin, FaPortrait } from "react-icons/fa";
import { Social } from "../../components/Social";

export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        Gilberto Carvalhal
      </h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a href="#">
            <p className="text-base md:text-lg">Portfólio</p>
          </a>
        </section>

        <footer className="flex justify-center gap-3 my-4">
          <Social url={`https://gilcarvalhal.github.io/gil/`}>
            <FaPortrait size={35} color="#fff" />
          </Social>

          <Social url={`https://www.instagram.com/gilcarvalhal1/`}>
            <FaInstagram size={35} color="#fff" />
          </Social>

          <Social url={`https://www.linkedin.com/in/gilberto-carvalhal/`}>
            <FaLinkedin size={35} color="#fff" />
          </Social>

          <Social url={`https://github.com/gilcarvalhal`}>
            <FaGithub size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
