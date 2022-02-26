import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="title">
        <h1>Creá tu lista de deseos</h1>
        <h1>Compartila en redes o por privado</h1>
        <h1>Recibí regalitos</h1>
        <Link href='crea'>
          <button>Crear Lista</button>
        </Link>
      </div>
    </>
  )
}
