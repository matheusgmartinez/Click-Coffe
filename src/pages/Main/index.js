import React from 'react'
import Navbar from '../../components/Navbar'
import main from '../../assets/main.png'
import main2 from '../../assets/main2.jpg'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div>
            <Navbar />
            <div style={{ "border-bottom": "solid black 1px" }}></div>
            <div class="container-fluid">
                <div class="row margem">
                    <div class="col-xs-12 col-sm-6">
                        <img alt="imgMain" class="imgMain" src={main} />
                    </div>
                    <div class="col">
                        <h1>Aceita um café?</h1>
                        <p>Já pensou em poder novamente ter aquela pausa para o cafézinho
                            entre a rotina do trabalho, só que remoto? E se isso for um
                            benefício da sua empresa? E se os cafés forem todos de excelente
                            qualidade, das melhores cafeterias do país? Pois é, isso é ClickCoffee!</p>
                        <p>O ClickCoffee é um benefícios para empresas e seus colaboradores
                            que promove a interação e o engajamento através do café. Somos
                            apaixonados por pessoas e sabemos que um dos principais problemas
                            do trabalho remoto é a interação das equipes. ClickCoffee é uma
                            dose de alegria para seus colaboradores! </p>
                        <a class="veja-mais btn btn-primary btn-lg"><Link to={'/catalogo'}>Saiba mais</Link></a>
                        <p></p>
                    </div>
                </div>
            </div>
            <p></p>
            <div class="row" style={{ "background-color": "#FCF7EA"}}>
                <div class="col newsletter">
                    <h3>Se inscreva para saber as novidades</h3>
                    <script async data-uid="8e5ee871d2" src="https://tremendous-speaker-7407.ck.page/8e5ee871d2/index.js"></script>
                </div>
            </div>
            <div class="margem" style={{ "background-color": "#F6F9FC", "padding": "2%" }}>
                <div style={{ "text-align": "center", "margin-left": "13%", "margin-right": "13%", }}>
                    <h3>Podemos deixar o home office melhor!</h3>
                    <p>O ClickCoffee é um benefícios para empresas e seus colaboradores
                        que promove a interação e o engajamento através do café. Somos
                        apaixonados por pessoas e sabemos que um dos principais problemas
                        do trabalho remoto é a interação das equipes. ClickCoffee é uma
                        dose de alegria para seus colaboradores! </p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img alt="agende seu café" class="imagens" src={img1} style={{ "height": "55%" }} />
                            <h4>AGENDE SEU CAFÉ</h4>
                            <p>Dentro da nossa plataforma, conectada com o Google Agenda,
                                é possível verificar os horários livres dos demais colaboradores.
                                Assim que você marca uma "pausa para o café" além de gerar uma
                                sala no Meet, você pode escolher qual opção de café vai querer
                                para você e todos colaboradores.</p>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img alt="cafeteiras parceiras" class="imagens" src={img2} style={{ "height": "55%" }} />
                            <h4>CAFETERIAS PARCEIRAS</h4>
                            <p>Após fazer o pedido, uma das nossas cafeterias parceiras mais
                                próxima da sua casa irá começar a preparar seu café e do seus
                                colaboradores. Nós temos parcerias com as melhores cafeterias
                                da cidade, que possuem os melhores baristas e trabalham
                                com cafés especiais e gourmet.</p>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img alt="entregas pontuais" class="imagens" src={img3} style={{ "height": "55%" }} />
                            <h4>ENTREGAS PONTUAIS</h4>
                            <p>Próximo do horário agendado a nossa equipe de entregadores já
                                vai estar posicionada para retirar o seu pedido e entregar
                                sempre com alguns minutos antes da sua reunião. Prezamos pela
                                pontualidade e integridade do produto, por isso mesmo trabalhamos
                                com uma equipe especial que realiza a entrega com perfeição,
                                para você aproveitar o seu café.</p>
                            <p></p>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img alt="interação nas reuniões" class="imagens" src={img4} style={{ "height": "55%" }} />
                            <h4>INTERAÇÃO NAS REUNIÕES</h4>
                            <p>Seja apenas um papo entre amigos antes de montar o briefing, ou
                                um feedback 1:1, receber um café para esse momento é algo que
                                faz toda a diferença. Além de trazer o sentimento de pertencimento,
                                ainda dá aquele UP quando precisamos de um pouco mais energia
                                para cumprir uma entrega.</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="margem" style={{ "text-align": "center" }}>
                <h1>Um mundo de possibilidades!</h1>
                <img alt="imgMain2" class="imgMain2" src={main2} />
                <div style={{ "margin-left": "20%", "margin-right": "20%", }}>
                    <p>Além dos variados cafes, a Clickcoffee reune o melhor ambiente para a sua equipe.
                        Tudo por aqui mesmo ;)</p>
                    <p>Assine nosso clube de Beneficios e realize momentos mesmo a distância, reúna sua
                        equipe em um ambiente de descontração e tenha acesso aos nossos coworkings
                        especiais com baristas. </p>
                </div>
                <a class="veja-mais btn btn-primary btn-lg"><Link to={'/clube'}>Conheça o Coffee Pass</Link></a>
            </div>
            <Footer />
        </div>
    )
}

export default Main;