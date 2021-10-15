import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import sobre from '../../assets/sobre.jpg'
import sobre1 from '../../assets/sobre1.jpg'
import sobre2 from '../../assets/sobre2.png'
import sobre3 from '../../assets/sobre3.png'

function Sobre() {
    return (
        <div>
            <Navbar />
            <div style={{ "border-bottom": "solid black 1px" }}></div>
            <div class="sobre">
                <h2 style={{ "padding": "3%" }}>Revolucionamos a
                    <br />
                    "Pausa para o cafezinho"</h2>
                <img alt="sobre" src={sobre} />
            </div>
            <div class="container-fluid margem-sobre">
                <div class="row margem">
                    <div class="col-md-4">
                        <img alt="sobre1" class="imagens" src={sobre1} />
                    </div>
                    <div class="col-md-6 texto">
                        <h3>Mantenha sua equipe motivada!</h3>
                        <p>Quem tem uma empresa sabe como um funcionário desmotivado
                            pode acabar prejudicando toda uma equipe e por isso é
                            importante oferecer benefícios que façam sentidos.
                            Em eventos remotos como integração de funcionários,
                            enviar um café antes do onboarding faz toda
                            diferença!</p>
                    </div>
                </div>
                <div class="row margem">
                    <div class="col-md-6 texto">
                        <h3>Porque vida é feita de momentos!</h3>
                        <p>Sim, é isso mesmo! Possuimos alguns drinks de café disponíveis
                            para fazer a alegria da sua equipe e deixar aquele encontro
                            mais especial. É possível bloquear os agendamentos antes
                            do horário de folga para ninguém sextar fora da hora!</p>
                    </div>
                    <div class=" col-md-4">
                        <img alt="sobre2" class="imagens" src={sobre2} />
                    </div>
                </div>
                <div class="row margem">
                    <div class="col-md-4">
                        <img alt="sobre3" class="imagens" src={sobre3} />
                    </div>
                    <div class="col-md-6 texto">
                        <h3>Os melhores coworkings a sua disposição!</h3>
                        <p>Tá com reforma em casa? A energia acabou e tem uma entrega urgente?
                            A ClickCoffee também tem convênio com os melhores coworkings e
                            entregamos nossos cafés nesses lugares também. Agora além de todo
                            o ambiente confortável, silencioso e propício para você trabalhar
                            nesses coworkings, você também ainda consegue ter o seu café e
                            enviar para os seus amigos.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sobre;