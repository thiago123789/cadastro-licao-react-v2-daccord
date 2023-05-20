from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/licoes/*" : {"origins" : "*"}})

licoes = [

    

]

@app.route('/licoes', methods=['GET'])
def obter_licoes():
    licoes_retorno = []
    for itera_licoes in licoes:
        licoes_retorno.append({
            'id': itera_licoes['id'],
            'titulo': itera_licoes['titulo'],
            'autor': itera_licoes['autor'],
            'dificuldade': itera_licoes['dificuldade'],
            'descricao': itera_licoes['descricao'],
            'introducao': itera_licoes['introducao'],
            'link': itera_licoes['link'],
        })
    return jsonify(licoes_retorno)


@app.route('/licoes/<string:id>', methods=['GET'])
def obter_licoes_id(id):
    for itera_licoes in licoes:
        if itera_licoes.get('id') == id:
            return jsonify(itera_licoes)


@app.route('/licoes/<string:id>', methods=['PUT'])
def edita_licoes_id(id):
    licao_alterada = request.get_json()
    for indice, itera_licoes in enumerate(licoes):
        if itera_licoes.get('id') == id:
            licoes[indice].update(licao_alterada)
            return jsonify(licoes[indice])

@app.route('/licoes', methods=['POST'])
def adiciona_licao():
    nova_licao = request.get_json()
    licoes.append(nova_licao)
    return jsonify(licoes)

@app.route('/licoes/<string:id>', methods=['DELETE'])
def excluir_licao(id):
    for indice, itera_licao in enumerate(licoes):
        if itera_licao.get('id') == id:
            del licoes[indice]
    return jsonify(licoes)

if __name__ == "__main__":
    app.run(port=8080, host='localhost', debug=True)
