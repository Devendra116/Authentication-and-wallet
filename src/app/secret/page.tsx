import Link from "next/link";
import Head from "next/head";

const SecretPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Secret Page</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-white">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold mb-6 text-center">Secret Page</h1>

        </div>
      </div>
    </>
  );
};

export default SecretPage;

