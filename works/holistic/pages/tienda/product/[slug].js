import { ProductoView } from "components/tienda/productoView/ProductoView"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import client from "utils/client"
import { urlFor } from "utils/image"
import { Store } from "utils/Store"


const ProductScreen = (props) => {

    const {slug} = props

    const {state: {cart}, dispatch} = useContext(Store)

    const [state, setState] = useState({
        product: null,
        loading: true,
        error: '',
      });

      const { product, loading, error } = state;

      useEffect(() => {
        
        const query = `*[_type == "product" && slug == $slug][0]`
        const fetchData = async () => {
          try {
            const product = await client.fetch( query ,{slug} );
            setState({ ...state, product, loading: false });
    
          } catch (err) {
            setState({ ...state, error: err.message, loading: false });
          }
        };
        fetchData();
     
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
                        <Link href="/tienda">
                            Volver a la tienda
                        </Link>
                        
                        <ProductoView producto={state.product} />
                       
                        <article>

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