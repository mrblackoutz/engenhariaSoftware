import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 pb-20 text-white">
      <main className="flex flex-col items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Cabeçalho principal */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Eleve Seu Restaurante com Tecnologia de Ponta
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto opacity-80">
            Somos uma equipe de 4 cientistas da computação com soluções personalizadas para transformar seu restaurante. 
            Aumente a eficiência, melhore a experiência do cliente e potencialize seus resultados com nossa tecnologia inovadora.
          </p>
        </div>

        {/* Imagem de destaque */}
        <div className="relative w-full max-w-4xl mt-8">
          <Image
            src="/adega-santiago.jpg"  // Troque pela imagem desejada
            alt="Restaurante moderno"
            width={1200}
            height={800}
            objectFit="cover"
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Botões de chamada para ação */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10">
          <a
            href="/solucoes"
            className="bg-white text-primary font-semibold text-lg py-3 px-6 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 transform hover:scale-105"
          >
            Descubra Nossas Soluções
          </a>
          <a
            href="https://www.contate-nos.com"
            className="bg-transparent border-2 border-white text-white font-semibold text-lg py-3 px-6 rounded-full shadow-xl hover:bg-white hover:text-blue-600 transition-all ease-in-out duration-300 transform hover:scale-105"
          >
            Entre em Contato
          </a>
        </div>

        {/* Seção de benefícios */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            Por que escolher nossos serviços?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="p-8 bg-white text-primary rounded-2xl shadow-lg transform hover:scale-105 transition-all ease-in-out duration-300">
              <h3 className="text-2xl font-semibold">Tecnologia de Ponta</h3>
              <p className="mt-4 text-lg opacity-80">
                Utilizamos as tecnologias mais avançadas para garantir soluções que
                resolvem seus desafios de maneira inteligente e eficaz.
              </p>
            </div>
            <div className="p-8 bg-white text-primary rounded-2xl shadow-lg transform hover:scale-105 transition-all ease-in-out duration-300">
              <h3 className="text-2xl font-semibold">Experiência Comprovada</h3>
              <p className="mt-4 text-lg opacity-80">
                Nossa equipe de cientistas da computação tem experiência no mercado e sabe como impulsionar o sucesso de restaurantes.
              </p>
            </div>
            <div className="p-8 bg-white text-primary rounded-2xl shadow-lg transform hover:scale-105 transition-all ease-in-out duration-300">
              <h3 className="text-2xl font-semibold">Soluções Sob Medida</h3>
              <p className="mt-4 text-lg opacity-80">
                Criamos soluções personalizadas que atendem às necessidades específicas do seu restaurante, sempre focando na inovação.
              </p>
            </div>
          </div>
        </section>

        {/* Footer com links adicionais */}
        <footer className="mt-20 w-full text-center">
          <div className="flex justify-center gap-10">
            <a
              href="/sobre-nos"
              className="text-white hover:underline hover:underline-offset-4 transition-all ease-in-out duration-300"
            >
              Conheça nossa equipe
            </a>
            <a
              href="/testemunhos"
              className="text-white hover:underline hover:underline-offset-4 transition-all ease-in-out duration-300"
            >
              Depoimentos de Clientes
            </a>
            <a
              href="https://www.contate-nos.com"
              className="text-white hover:underline hover:underline-offset-4 transition-all ease-in-out duration-300"
            >
              Entre em contato
            </a>
          </div>
          <p className="mt-10 text-sm opacity-80">
            &copy; 2025 Transformando Restaurantes com Inovação. Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
}
