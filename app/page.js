import Head from "next/head";
import Image from "next/image";
import CreateAccount from "./../pages/accountPage";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CreateAccount />
    </>
  );
}
