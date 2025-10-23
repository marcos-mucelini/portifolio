import TextoDestacado from "../components/TextoDestacado"
import TextoPrincipal from "../components/TextoPrincipal"
import TextoSimples from "../components/TextoSimples"
import "./Principal.css"

export default function Principal() {

    return(
        <section>
            <TextoDestacado 
                texto={"Olá meu nome é"}
            />

            <TextoPrincipal
                texto={"Marcos Augusto"}
            />

            <TextoSimples
                texto={"Tenho 27 anos, gosto de Rock, anime e gatinhos."}
            />
        </section>
    )
}