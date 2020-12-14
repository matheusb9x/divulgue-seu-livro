import React from 'react';
import { Card, Comment, Tooltip, List, Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import moment from 'moment';
import './style.css';

const data = [
    {
        author: 'Stephen King',
        texts: [
            {
                title: 'It',
                content: 'I grew up in a small northern New England farming community where most of the roads were dirt,',
                likes: 13
            },
            {
                title: 'Under the Dome',
                content: 'On an entirely normal, beautiful fall day in Chesters Mill, Maine, the town is inexplicably and suddenly sealed off from the rest of the world by an invisible force field. ',
                likes: 8
            }
        ]
    },
    {
        author: 'J. R. R. Tolkien',
        texts: [
            {
                title: 'As Duas Torres',
                content: 'Não demorou muito para que Aragorn encontrasse pistas recentes. Num ponto, perto da margem do Entágua, encontrou pegadas: pegadas de hobbit, mas leves demais para que se ',
                likes: 41
            },
            {
                title: 'O Hobbit',
                content: "Bilbo acaba de dizer 'Bom dia' para Galdalf e ele responde: O quê você quer dizer com isso? está me desejando um bom dia, esta dizendo que o dia está bom, indiferente de ",
                likes: 27
            }
        ]
    },
    {
        author: 'Isaac Asimov',
        texts: [
            {
                title: 'Fundação',
                content: 'Em Trantor, o planeta capital do Império Galáctico, o matemático Hari Seldon estuda, apresenta e torna público o uso de técnicas matemáticas que tornariam possível uma ',
                likes: 13
            },
            {
                title: 'Eu, Robô',
                content: 'Olhei para minhas anotações e não gostei delas. Passara três dias na U.S. Robôs e bem poderia tê-los passado em casa, lendo a Enciclopédia Telúrica. ',
                likes: 4
            }
        ]
    },
    {
        author: 'Mauricio de Sousa',
        texts: [
            {
                title: 'Turma da Mônica',
                content: 'Franjinha termina a sua nova invenção: uma máquina do tempo. Mas, quando seus amigos invadem seu laboratório, armam uma grande confusão. No fim, fazem com que os quatro',
                likes: 15
            },
            {
                title: 'Turma da Mônica Jovem',
                content: 'A mesma turminha, mas um pouco diferente. Agora, Mônica, Cebolinha, Cascão e Magali são adolescentes que precisam conciliar suas aventuras com as responsabilidades do',
                likes: 10
            }
        ]
    },
    {
        author: 'J. K. Rowling',
        texts: [
            {
                title: 'O Príncipe Mestiço',
                content: 'Pouco antes de Lílian Evans ser morta por Lord Voldemort, Snape trocou de lado e se tornou um membro da Ordem da Fênix e agente duplo durante a Segunda ',
                likes: 21
            },
            {
                title: 'O Conto dos três Irmãos',
                content: 'Era uma vez três irmãos que viajavam por uma estrada deserta e tortuosa ao anoitecer. Depois de algum tempo, os irmãos chegaram a um rio fundo demais para vadear ',
                likes: 3
            }
        ]
    },
    {
        author: 'Ziraldo',
        texts: [
            {
                title: 'O Menino Maluquinho',
                content: 'E quando vinha São João o mais luminoso balão que todo mundo apontava era o gordo balãozinho do menino maluquinho que custara uma semana de trabalho de tesoura ',
                likes: 32
            },
            {
                title: 'As Flores da Primavera',
                content: 'De todas as estações do ano, a preferida do Bichinho da Maçã é a primavera. É quando ele se diverte entre as flores mais lindas, usufruindo férias maravilhosas.',
                likes: 17
            }
        ]
    },
];


export const EditoraHome = () => {
    return (
        <>
            <h1>Editora Martins Fontes</h1>
            <h2>Novas publicações</h2>

            <List
                // itemLayout="horizontal"
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <li className="author-card">
                        <Card title={item.author}>
                            <List
                                dataSource={item.texts}
                                renderItem={text => (
                                    <li className="text-card">
                                        <Card type="inner" title={text.title} extra={<a href="#">Ler mais</a>}>
                                        <div className="text-wrapper">
                                            {text.content}...
                                        </div>
                                        <div className="like-count">
                                            <LikeOutlined key="like" /> {text.likes}
                                        </div>
                                        </Card>
                                    </li>
                                )}
                            />
                            
                        </Card>
                    </li>
                )}
            />
        </>
    );
};