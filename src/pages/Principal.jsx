import TextoDestacado from "../components/TextoDestacado"
import "./Principal.css"

export default function Principal() {

    return(
        <section>
            <TextoDestacado 
                texto={"Olá meu nome é"}
            />
            

            <h1>Marcos Augusto</h1>
            <p>Tenho 27 anos, gosto de Rock, anime e gatinhos.</p>   
        </section>
    )
}