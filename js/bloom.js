let blooms = []; // Cria uma matriz vazia para armazenar objetos Bloom.

document.getElementById('cadastroblom').addEventListener('submit', function (e) {
    e.preventDefault(); // Não deixa enviar o formulário quando ocorrer o evento 'submit'.
    //O evento "submit" é acionado quando um usuário tenta enviar um formulário. Isso pode acontecer clicando em um botão de envio no formulário ou pressionando "Enter" dentro de um campo de entrada de texto. 
    const nome = document.getElementById('nome').value; // O valor do campo de entrada de nome.

    const id = blooms.length + 1; // Gera um ID para o novo objeto Bloom com base no comprimento atual da matriz.

    blooms.push({ id, nome }); // Adiciona um novo objeto à matriz com um ID e nome.
    exibirBloom(); // Chama a função para exibir todos os objetivos na tabela.
    document.getElementById('nome').value = ''; // Apaga o campo de entrada de nome.
});

function exibirBloom() {
    const tableBody = document.getElementById('bloomInfo'); // Obtém a referência ao corpo da tabela onde serão exibidos.
    tableBody.innerHTML = ''; // Apaga o conteúdo atual da tabela.

    blooms.forEach(bloom => {
        const row = document.createElement('tr'); // Cria uma nova linha na tabela.

        row.innerHTML = `
                <td>${bloom.id}</td> 
                <td>${bloom.nome}</td>
                <td>
                    <button onclick="editarBloom(${bloom.id})">Editar</button> 
                    <button onclick="excluirBloom(${bloom.id})">Excluir</button> 
                </td>
            `;
        /*<td>${bloom.id}</td> // célula com o ID do Bloom.
        <td>${bloom.nome}</td> // célula com o nome do Bloom.
        <td>
            <button onclick="editarBloom(${bloom.id})">Editar</button> //botão para editar o Bloom.
            <button onclick="excluirBloom(${bloom.id})">Excluir</button> //botão para excluir o Bloom.
        </td>*/

        tableBody.appendChild(row); // Adiciona a linha à tabela.
    });
}

function editarBloom(id) {
    const nome = prompt('Editar Nome:', blooms.find(bloom => bloom.id === id).nome); // Pede ao usuário um novo nome.

    if (nome !== null) { // Ver se o usuário não cancelou a edição.
        const index = blooms.findIndex(bloom => bloom.id === id); // Encontra o índice do Bloom a ser editado na matriz .
        blooms[index].nome = nome; // Atualiza o nome do Bloom.
        exibirBloom(); // Chama a função para exibir todas as atualizações na tabela.
    }
}

function excluirBloom(id) {
    const confirmacao = confirm('Tem certeza que deseja excluir este Bloom?'); // Solicita uma confirmação para excluir.

    if (confirmacao) { // Verifica se o usuário confirmou se removou.
        blooms = blooms.filter(bloom => bloom.id !== id); // Remove o Bloom com o ID correspondente da matriz.
        exibirBloom(); // Chama a função para exibir todas as atualizações na tabela.
    }
}

exibirBloom(); // Chama a função para exibir todas as atualizações na tabela quando a página é carregada.


