import React from 'react';

const LicaoTabela = (props) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Autor</th>
                    <th>Título</th>
                    <th>Nível</th>
                    <th>Ações</th>
                    
                </tr>
            </thead>
            <tbody>{props.children}</tbody>
        </table>
    )
}

export default LicaoTabela;
