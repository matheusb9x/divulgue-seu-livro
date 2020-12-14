import React from "react";
import { Form, Input, Button } from 'antd';
import TextArea from "antd/lib/input/TextArea";

export const EditoraContact = () => {
    return (
        <div style={{backgroundColor:"#FFF", width:"100%", padding:"16px", marginTop:"16px"}}>
            <Form
                //{...layout}
                name="basic"
                initialValues={{
                    publication: "Dom Casmurro - Capítulo Primeiro",
                    message: "Olá, somos a Editora Martins Fontes e temos interesse em sua obra. Podemos conversar?"
                }}
            >
                <Form.Item
                    label="Publicação"
                    name="publication"
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    label="Mensagem"
                    name="message"
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Enviar</Button>
                </Form.Item>
            </Form>
        </div>
    );
}