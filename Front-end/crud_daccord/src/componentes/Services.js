import React, { useState, useEffect } from 'react';
import LicaoForm from './LicaoForm';
import LicaoItem from './LicaoItem';
import LicaoTabela from './LicaoTabela';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const apiUrl = 'http://localhost:5000/licoes';

const geradorDeId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};


const Services = () => {
  const [licoes, setLicoes] = useState([]);
  const [mostraModal, setMostraModal] = useState(false);
  const [selecionaLicao, setSelecionaLicao] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setLicoes(data))
      .catch(error => {
        console.log('Erro ao executar o método fetch na API', error);
      });

  }, [licoes]);

  const editarLicao = (licaoId, editarLicao) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editarLicao)
    };
    fetch(`${apiUrl}/${licaoId}`, requestOptions)
      .then(response => response.json())
      .then(editarLicao => {
        setLicoes(
          licoes.map((licao) => (licao.id === licaoId ? editarLicao : licao))
        );
      })
      .catch(error => {
        console.log('Erro ao editar lição:', error);
      });
  };

  const excluirLicao = (licaoId) => {
    fetch(`${apiUrl}/${licaoId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao deletar usuário');
        }
        setLicoes(licoes.filter((licao) => licao.id !== licaoId));
      })
      .catch(error => {
        console.log('Erro ao deletar o usuária:', error);
      });
  };

  const adicionarLicao = (licao) => {
    const novaLicao = { ...licao, id: geradorDeId() };
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novaLicao)
    })
      .then(response => response.json())
      .then(novaLicaoAdc => setLicoes([...licoes, novaLicaoAdc]))
      .catch(error => console.log('Erro ao adicionar usuário:', error));
  };

  const verLicao = (licaoId) => {
    const licao = licoes.find((licao) => licao.id === licaoId);
    setSelecionaLicao(licao);
    setMostraModal(true);
  };

  return (
    <div>

      <LicaoForm handleAdcLicao={adicionarLicao} />

      <LicaoTabela>
        {licoes.map((licao, index) => (
          <LicaoItem
            key={index}
            licao={licao}
            verLicao={verLicao}
            editarLicao={editarLicao}
            excluirLicao={excluirLicao}
          />
        ))}
      </LicaoTabela>
 
      <Modal show={mostraModal} onHide={() => setMostraModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Informações da lição</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selecionaLicao && (
            <>
              <p><strong>Autor:</strong> {selecionaLicao.autor}</p>
              <p><strong>Título:</strong> {selecionaLicao.titulo}</p>
              <p><strong>Dificuldade:</strong> {selecionaLicao.dificuldade}</p>
              <p><strong>Descrição:</strong> {selecionaLicao.descricao}</p>
              <p><strong>Introdução:</strong> {selecionaLicao.introducao}</p>
              <p><strong>Link:</strong> {selecionaLicao.link}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostraModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Services;
