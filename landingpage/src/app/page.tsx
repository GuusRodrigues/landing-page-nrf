import React from 'react';
import Head from 'next/head';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-900">
      <Head>
        <title>Senac Eventos - NRF 2025: Retail&apos;s Big Show</title>
        <meta name="description" content="Gerencie sua agenda para o evento NRF 2025 com o aplicativo Senac Eventos desenvolvido para Fecomercio PE." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-blue-700 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Senac Eventos</h1>
        <p className="text-lg mt-2">Sua agenda personalizada para o maior evento de varejo do mundo!</p>
      </header>

      <main className="flex-grow w-full max-w-4xl px-6 py-12">
        <section className="bg-blue-100 shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-700">Baixe Agora</h2>
          <p className="text-md mt-2 text-gray-700">
            Disponível para dispositivos Android e iOS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://drive.google.com/file/d/1uB6XuiEAqJTdLsGVnZwF-l7NRqnIR6ga/view?usp=sharing"
              download
              className="bg-blue-700 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-800 transition"
            >
              Baixar para Android
            </a>
            <a
              href="/app.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-800 transition"
            >
              Baixar para iOS
            </a>
          </div>
        </section>

        <section className="bg-gray-100 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-700 text-center">Como Usar</h2>
          <ol className="list-decimal list-inside mt-6 text-left text-gray-800 space-y-4">
            <li>Baixe o aplicativo no seu dispositivo (Android ou iOS).</li>
            <li>Conceda as permissões necessárias e instale o aplicativo.</li>
            <li>Abra o app e explore as palestras e eventos da NRF 2025.</li>
            <li>Adicione palestras à sua agenda personalizada.</li>
            <li>Visualize e interaja com as publicações na linha do tempo.</li>
          </ol>
        </section>
      </main>

      <footer className="w-full bg-blue-700 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Senac PE. Todos os direitos reservados.</p>
        <p>Aplicativo oficial para o evento NRF 2025: Retail&apos;s Big Show.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
