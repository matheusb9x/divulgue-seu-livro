import React from 'react';
import { Card, Tooltip } from 'antd';
import moment from 'moment';

const data = [
    {
        actions: [<span key="comment-list-reply-to-0">Responder</span>],
        author: 'Escritora XYZ',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
               Curabitur tincidunt risus eu orci sollicitudin, vel molestie lacus lobortis.
               Praesent scelerisque est orci, et facilisis nisi commodo sit amet.
               Donec ac facilisis ligula, vel dictum lectus. Suspendisse quis orci ex.
               Phasellus nec dui non nibh blandit rhoncus.
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(1, 'days').fromNow()}</span>
            </Tooltip>
        ),
    }
];

export const EscritorContato = () => {
    return (<>
        <h1>Propostas para 'Noite na Cabana'</h1>

        <Card title="Início da obra" style={{marginTop:'16px'}}>
            Nunc in lobortis ante. In viverra condimentum congue. 
                Praesent molestie et lectus eget ullamcorper. 
                Nulla dolor eros, tincidunt quis consectetur et, accumsan id lectus (...)
        </Card>

        <Card title="Propostas recebidas">
                {/* <List
                    className="comment-list"
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <li>
                            <Comment
                                actions={item.actions}
                                author={item.author}
                                //avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                /> */}
            </Card>
    </>)
};