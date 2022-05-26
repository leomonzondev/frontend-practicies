import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import client from "utils/client"
import { urlFor } from "utils/image"


const ProductScreen = (props) => {

    const {slug} = props

    const [state, setState] = useState({
        product: null,
        loading: true,
        error: '',
      });

      const { product, loading, error } = state;

      useEffect(() => {
        const fetchData = async () => {
          try {
            const product = await client.fetch(
              `
                *[_type == "product" && slug.current == $slug][0]`,
              { slug }
            );
            setState({ ...state, product, loading: false });
          } catch (err) {
            setState({ ...state, error: err.message, loading: false });
          }
        };
        fetchData();
        console.log(slug)
      }, []);


    return (
        <div className="mt-20">

        {
            loading 
            ? <p>Cargando...</p>
            : error 
                ? <p>Hubo un error en la carga de productos</p>
                : (
                    <section>
                        <Link href="/">
                            Volver a resultados
                        </Link>
                        <button onClick={() => console.log(state)}>Mostrar state</button>
                        <article>
                            <div>
                                {/* <Image src={urlFor(product.image)} alt={product.name} layout="responsive" width={640} height={640} /> */}
                            </div>
                        </article>
                    </section>
                )
        }

        </div>
    )
}



export function getServerSideProps(context) {
    return {
        props: { slug: context.params.slug},
    }
}

export default ProductScreen