import Head from "next/head";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ProductFeed from "../components/ProductFeed/ProductFeed";
import { getSession } from "next-auth/client";

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Click n' Shop</title>
      </Head>
      
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        
        <Banner />
        
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session,
    },
  };
}
