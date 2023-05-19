import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const LicaoItem = ({ licao, verLicao, editarLicao, excluirLicao }) => {
    const [editarLicaoAberto, setEditarLicaoAberto] = useState(false);
    const [licaoEditada, setLicaoEditada] = useState({});

    const btnEditarLicao = () => {
        setEditarLicaoAberto(true);
        setLicaoEditada(licao);
    };

    const btnSalvarEditarLicao = (event) => {
        event.preventDefault();
        editarLicao(licaoEditada.id, licaoEditada);
        setEditarLicaoAberto(false);
        setLicaoEditada({});
    }

    const atualizaValorInputEdicao = (event) => {
        const { name, value } = event.target;
        setLicaoEditada((estadoAntigo) => ({ ...estadoAntigo, [name]: value }));
    };

    return (
        <tr key={licao.id}>
            
            <td>{licao.id}</td>
            <td>{licao.autor}</td>
            <td>{licao.titulo}</td>
            <td>{licao.dificuldade}</td>
            <td>
                <Button variant="primary" size="sm" onClick={() => verLicao(licao.id)}>
                    Read
                </Button>
                <Button variant="warning" size="sm" onClick={btnEditarLicao}>
                    Update
                </Button>
                <Button variant="danger" size="sm" onClick={() => excluirLicao(licao.id)}>
                    Delete
                </Button>
            </td>

            <Modal show={editarLicaoAberto} onHide={() => setEditarLicaoAberto(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Lição</Modal.Title>
                </Modal.Header>
                <Form onSubmit={btnSalvarEditarLicao}>
                    <Modal.Body>
                        <Form.Group controlId="formName">
                            <Form.Label>Autor:</Form.Label>
                            <Form.Control
                                type="text"
                                name="autor"
                                value={licaoEditada.autor || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Título:</Form.Label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                value={licaoEditada.titulo || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                        <Form.Select aria-label="Default select example" name="dificuldade" value={licaoEditada.dificuldade || ''} onChange={atualizaValorInputEdicao}>
                            <option value="">Nível de dificuldade</option>
                            <option value="Fácil">Fácil</option>
                            <option value="Médio">Médio</option>
                            <option value="Difícil">Difícil</option>
                        </Form.Select>

                        <Form.Group className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="descricao"
                                value={licaoEditada.descricao || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Introdução</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="introducao"
                                value={licaoEditada.introducao || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Autor:</Form.Label>
                            <Form.Control
                                type="text"
                                name="link"
                                value={licaoEditada.link || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setEditarLicaoAberto(false)}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </tr>
    )
}
export default LicaoItem;