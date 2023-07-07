// import Image from 'next/image'
// import styles from './page.module.css'

import CrudApp from "@/components/CrudApp";
import CrudApi from "@/components/CrudApi";

export default function Home() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  )
}
