import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const LicaoForm = ({ handleAdcLicao }) => {
    const [autor, setAutor] = useState('');
    const [titulo, setTitulo] = useState('');
    const [dificuldade, setDificuldade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [introducao, setIntroducao] = useState('');
    const [link, setLink] = useState('');
    const [mostraModal, setMostraModal] = useState(false);

    const btnEnviar = (event) => {
        event.preventDefault();
        const licao = { autor, titulo, dificuldade, descricao, introducao, link }
        handleAdcLicao(licao);
        setAutor('');
        setTitulo('');
        setDificuldade('');
        setDescricao('');
        setIntroducao('');
        setLink('');
        setMostraModal(false);

    };

    return (
        <>
            <Button variant="primary" onClick={() => setMostraModal(true)}>
                Cadastrar Lição
            </Button>
            <Modal show={mostraModal} onHide={() => setMostraModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar Lição</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={btnEnviar}>
                        <Form.Group controlId="formName">
                            <Form.Label>Autor:</Form.Label>
                            <Form.Control
                                type="text"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Título:</Form.Label>
                            <Form.Control
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Select aria-label="Default select example" type='select' value={dificuldade} onChange={(e) => setDificuldade(e.target.value)}>
                            <option>Nível de dificuldade</option>
                            <option value="Fácil">Fácil</option>
                            <option value="Médio">Médio</option>
                            <option value="Difícil">Difícil</option>
                            
                        </Form.Select>

                        <Form.Group className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Introdução</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={introducao}
                                onChange={(e) => setIntroducao(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Link:</Form.Label>
                            <Form.Control
                                type="text"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setMostraModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default LicaoForm;