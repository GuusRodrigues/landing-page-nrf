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
          <p className="text-md mt-2 text-gray-700">Disponível em formato APK para dispositivos Android.</p>
          <a
            href="/apk-link"
            download
            className="mt-4 inline-block bg-blue-700 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-800 transition"
          >
            Baixar APK
          </a>
        </section>

        <section className="bg-gray-100 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-700 text-center">Como Usar</h2>
          <ol className="list-decimal list-inside mt-6 text-left text-gray-800 space-y-4">
            <li>Baixe, dê permissão e instale o aplicativo APK em seu dispositivo Android.</li>
            <li>Abra o app e navegue pelas palestras e eventos da NRF 2025.</li>
            <li>Adicione palestras à sua agenda personalizada.</li>
            <li>Publique suas experiências na linha do tempo e compartilhe com outros participantes.</li>
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
