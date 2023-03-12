import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon";
  // url = "https://jsonplaceholder.typicode.com/users"
  // console.log(useFetch());
  let {data, isPending, error} = useFetch(url);
  return (
    <>
      <h3>Hooks personalizados</h3>
      <h4>{JSON.stringify(isPending)}</h4>
      <h4>
        <mark>{JSON.stringify(error)}</mark>
      </h4>
      <h4>
        <pre style={{whiteSpace:"pre-wrap"}}>
          <code>
            {JSON.stringify(data)}
          </code>
        </pre>
      </h4>
    </>
  );
}