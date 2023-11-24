import ItemServicos from "./ItemServicos";

function Servicos(servico) {
    return (
        <div>
            <h1>Serviços prestados</h1>

            <p>Serviços prestados pela nossa empresa para os nossos clientes.</p>
            <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="logo serviços"></img>
            <ItemServicos servico="Manutenção Elétrica Residencial: Realizamos reparos e instalações elétricas em residências, garantindo a segurança e o bom funcionamento dos sistemas elétricos." />
            <ItemServicos servico="Hidráulica Residencial: Oferecemos serviços de reparo e manutenção em sistemas hidráulicos, solucionando vazamentos, trocando tubulações e garantindo o correto funcionamento dos equipamentos." />
            <ItemServicos servico="Montagem de Móveis: Proporcionamos comodidade aos nossos clientes através da montagem e desmontagem de móveis, garantindo a correta instalação e evitando danos aos itens." />
            <ItemServicos servico="Pintura Residencial: Realizamos serviços de pintura em ambientes internos e externos, proporcionando um acabamento de qualidade e a renovação estética dos espaços." />
            <ItemServicos servico="Pequenos Reparos Gerais: Atendemos às demandas diversas de pequenos reparos, como a fixação de objetos, troca de fechaduras, reparo de torneiras, entre outros, visando proporcionar um ambiente funcional e seguro." />


        </div>

    );
}
export default Servicos;

