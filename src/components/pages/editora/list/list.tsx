import React from 'react';
import { Card, Comment, Tooltip, List, Button } from 'antd';
import { SearchOutlined, LikeOutlined } from '@ant-design/icons';
import './style.css';

const data = [
    {
        author: 'Gilberto Cotrin',
        title: 'Fundamentos da Filosofia',
        content: 'Filosofia é o estudo de questões gerais e fundamentais sobre a existência, conhecimento, valores, razão, mente, e linguagem; frequentemente colocadas como problemas a se resolver. O termo provavelmente foi cunhado por Pitágoras (c. 570 – 495 BCE). Os métodos filosóficos incluem o questionamento, a discussão crítica, o argumento racional e a apresentação sistemática. As questões filosóficas clássicas incluem: É possível saber qualquer coisa e provar que se sabe? O que é mais real? Os filósofos também colocam questões mais práticas e concretas, como: Existe uma maneira melhor de se viver? É melhor ser justo ou injusto (se houver como se safar)? Os seres humanos têm livre arbítrio?',
        likes: 13
    },
    {
        author: 'Leonard Mlodinow',
        title: 'Subliminar',
        content: 'O seu livro "Subliminar" é sobre a influência da mente inconsciente na vida das pessoas, trazendo uma gama variada de experimentos científicos sobre o que é por ele chamado de "novo inconsciente" ou moderno conceito de inconsciente.',
        likes: 8
    },
    {
        author: 'Raymundo Faoro',
        title: 'Os Donos do Poder',
        content: 'A obra faz uma analise da origem do patrimonialismo brasileiro na Portugal do século XIV e busca as raízes de uma sociedade na qual o poder público é exercido, e usado, como se fosse privado. Segundo o sociólogo Simon Schwartzman, ao fazer uso de conceitos de Max Weber já abordados por Alberto Guerreiro Ramos e Sérgio Buarque de Holanda em seu Raízes do Brasil, a obra de Faoro, por sua vez',
        likes: 13
    },
    {
        author: 'Erich Gamma',
        title: 'Design Patterns',
        content: 'Quando desenvolvemos um software, é natural encontrarmos desafios. Conforme adquirimos experiência, percebemos que determinados problemas são recorrentes, mesmo em projetos diferentes. Automaticamente, nos lembramos de como solucionamos um desafio parecido anteriormente. É quase como se houvesse um padrão para solucionar certos tipos de problemas que encontramos. Esses padrões são conhecidos como Design Patterns ou Padrões de Códigos. ',
        likes: 4
    },
    {
        author: 'John Guinnes',
        title: 'Guinnes World Records - 2020',
        content: 'O Guinness World Records (antigo Guinness Book of Records, lançado em português como Livro Guinness dos Recordes) é uma edição publicada anualmente, que contém uma coleção de recordes e superlativos reconhecidos internacionalmente, tanto em termos de performances humanas como de extremos da natureza. Em 2003, o livro chegou a 100 milhões de cópias vendidas, desde a sua primeira edição em 1955, sendo o décimo livro mais vendido da história, o de 2009 é o quinquagésimo-quinto.',
        likes: 15
    },
    {
        author: 'Benjamin Graham',
        title: 'O Investidor Inteligente',
        content: 'Hoje em dia, é comum ser chamado de investidor todo aquele que negocia ações. Entretanto, Graham faz uma precisa distinção entre especulação e investimento. Para ele, quem toma decisões com base na variação do preço de mercado dos papéis, principalmente em curto prazo, age de forma especulativa. ',
        likes: 10
    }
];


export const EditoraList = () => {
    return (
        <>
            <h1>Busca por gênero</h1>

            <Button size='middle' type="primary" style={{margin: '16px 0'}}>Trocar filtro <SearchOutlined key="like" /></Button>
            <Card title="Filtrando por: Não-ficção">
                <List
                    dataSource={data}
                    renderItem={item => (
                        <li className="text-card">
                            <Card type="inner" title={item.title} extra={<a href="#">Ler mais</a>}>
                            <div className="text-wrapper">
                                {item.content}...
                            </div>
                            <div className="author-info">
                                Autor: {item.author}
                            </div>
                            <div className="like-count">
                                <LikeOutlined key="like" /> {item.likes}
                            </div>
                            </Card>
                        </li>
                    )}
                />
            </Card>
        </>
    );
};