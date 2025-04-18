import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export function Networks() {
  const [portfolio, setPortifolio] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      portfolio: portfolio,
      instagram: instagram,
      linkedin: linkedin,
      github: github,
    })
      .then(() => {
        console.log("Cadastrados com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao salvar: " + error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-white font-medium mt-2 mb-2">
          Link do Portifólio
        </label>
        <Input
          type="url"
          placeholder="Digite a url do facebook..."
          value={portfolio}
          onChange={(e) => setPortifolio(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Instagram
        </label>
        <Input
          type="url"
          placeholder="Digite a url do facebook..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Linkedin
        </label>
        <Input
          type="url"
          placeholder="Digite a url do facebook..."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Github
        </label>
        <Input
          type="url"
          placeholder="Digite a url do facebook..."
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
}
