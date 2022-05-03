import React from 'react'
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResults/SearchResults';


function search({results}) {
    console.log(results);
    
  return (
      <>
        <Header/>
        <SearchResults results={results}/>
      </>
  )
}

export default search;

export async function getServerSideProps(context){
    const data = await fetch(`https://fakestoreapi.com/products/1`)
    .then((response) => response.json());

    return {
        props: {
            results: data,
        },
    };
}