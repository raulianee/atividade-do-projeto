import ItemFormulario from "../ItemFormulario";
import { Button } from 'reactstrap';
function Contato() {

    return (
        <div className="contato">
            <h2>Entre em Contato</h2>
            <p>Envie-nos uma mensagem:</p>
            <ItemFormulario name="nome" type="text" de="name" placeholder="Digite seu nome" />
            <ItemFormulario name="email" type="text" de="name" placeholder="Digite seu nome" />
            <ItemFormulario name="text" type="text" de="name" placeholder="Digite seu nome" />
            <p>Escreva a sua mensagem!</p>
            <div>
                <Button
                    color="primary"
                >
                    Enviar
                </Button>
            </div>


        </div>
    );
}

export default Contato