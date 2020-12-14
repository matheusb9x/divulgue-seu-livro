import React from 'react';
import { Card, Comment, Tooltip, List, Button } from 'antd';
import moment from 'moment';

const data = [
    {
        actions: [<span key="comment-list-reply-to-0">0 propostas</span>],
        author: 'Sonho de verão',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                Curabitur faucibus purus augue, at mattis orci dictum non. 
                Donec sodales sem quam, non pharetra justo hendrerit ac. 
                Nam ante augue, iaculis finibus aliquet quis, dapibus in libero. 
                Morbi lorem mauris, pharetra in feugiat at, posuere at libero (...)
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(1, 'days').fromNow()}</span>
            </Tooltip>
        ),
    },
    {
        actions: [<span key="comment-list-reply-to-0">1 proposta</span>],
        author: 'Noite na Cabana',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
            <p>
                Nunc in lobortis ante. In viverra condimentum congue. 
                Praesent molestie et lectus eget ullamcorper. 
                Nulla dolor eros, tincidunt quis consectetur et, accumsan id lectus (...)
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().subtract(2, 'days').fromNow()}</span>
            </Tooltip>
        ),
    },
];


export const EscritorHome = () => {
    return (
        <>
            <h1>Olá Rodrigo!</h1>

            <Button size='middle' type="primary" style={{margin: '16px 0'}}>Criar nova publicação</Button>
            <Card title="Suas publicações">
                <List
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
                />
            </Card>
        </>
    );
};