import React from 'react';
import { Card, Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import './style.css';
import { EditoraContact } from './contact';

const data = [
    {
        author: 'Gilberto Cotrin',
        title: 'Fundamentos da Filosofia',
        content: 'Filosofia é o estudo de questões gerais e fundamentais sobre a existência, conhecimento, valores, razão, mente, e linguagem; frequentemente colocadas como problemas a se resolver. O termo provavelmente foi cunhado por Pitágoras (c. 570 – 495 BCE). Os métodos filosóficos incluem o questionamento, a discussão crítica, o argumento racional e a apresentação sistemática. As questões filosóficas clássicas incluem: É possível saber qualquer coisa e provar que se sabe? O que é mais real? Os filósofos também colocam questões mais práticas e concretas, como: Existe uma maneira melhor de se viver? É melhor ser justo ou injusto (se houver como se safar)? Os seres humanos têm livre arbítrio?',
        likes: 13
    }
];


export const EditoraRead = () => {
    return (
        <>
            <Card title="Dom Casmurro - Capítulo Primeiro" extra={<><LikeOutlined key="like" /> 243</>}>
                <div className="container">
                    <div className="text-info">
                        <p>Autor: Machado de Assis</p>
                        <p>Gênero(s): Romance, Ficção, Memórias, Realismo Literário</p>
                        <p>Idioma: Português</p>
                        <p>Data de publicação: 10/12/2020</p>
                        <p>Tempo de leitura: 2 minuto(s)</p>
                        <a href="#">Contatar autor</a>
                    </div>
                    <div className="text-box">
                        <p>Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no trem da
                        Central um rapaz aqui do bairro, que eu conheço de vista e de chapéu.
                        Cumprimentou-me, sentou-se ao pé de mim, falou da Lua e dos ministros, e
                        acabou recitando-me versos. A viagem era curta, e os versos pode ser que não
                        fossem inteiramente maus. Sucedeu, porém, que, como eu estava cansado, fechei
                        os olhos três ou quatro vezes; tanto bastou para que ele interrompesse a leitura e
                        metesse os versos no bolso.</p>
                        <p>— Continue, disse eu acordando.</p>
                        <p>— Já acabei, murmurou ele.</p>
                        <p>— São muito bonitos.</p>
                        <p>Vi-lhe fazer um gesto para tirá-los outra vez do bolso, mas não passou do gesto;
                        estava amuado. No dia seguinte entrou a dizer de mim nomes feios, e acabou
                        alcunhando-me Dom Casmurro. Os vizinhos, que não gostam dos meus hábitos
                        reclusos e calados, deram curso à alcunha, que afinal pegou. Nem por isso me
                        zanguei. Contei a anedota aos amigos da cidade, e eles, por graça, chamam-me
                        assim, alguns em bilhetes: "Dom Casmurro, domingo vou jantar com você”.—
                        "Vou para Petrópolis, Dom Casmurro; a casa é a mesma da Renânia; vê se deixas
                        essa caverna do Engenho Novo, e vai lá passar uns quinze dias comigo”.— "Meu
                        caro Dom Casmurro, não cuide que o dispenso do teatro amanhã; venha e dormirá
                        aqui na cidade; dou-lhe camarote, dou-lhe chá, dou-lhe cama; só não lhe dou
                        moça”.</p>
                        <p>Não consultes dicionários. Casmurro não está aqui no sentido que eles lhe dão,
                        mas no que lhe pôs o vulgo de homem calado e metido consigo. Dom veio por
                        ironia, para atribuir-me fumos de fidalgo. Tudo por estar cochilando! Também não
                        achei melhor título para a minha narração; se não tiver outro daqui até ao fim do
                        livro, vai este mesmo. O meu poeta do trem ficará sabendo que não lhe guardo
                        rancor. E com pequeno esforço, sendo o título seu, poderá cuidar que a obra é
                        sua. Há livros que apenas terão isso dos seus autores; alguns nem tanto.</p>
                    </div>
                </div>

            </Card>
            <EditoraContact />
            <Button size='middle' type="primary" style={{ margin: '16px 0' }}>Voltar</Button>
        </>
    );
};