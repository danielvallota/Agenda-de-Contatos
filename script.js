const form = document.getElementById('form-cadastro');//chamei o formulário, agora form tem a referência do formulario id form-cadastro
const nome = [];//criei array para receber os dados digitados, ela começa vazia
const telefone = [];//criei array para receber os dados digitados, ela começa vazia
const email = [];//criei array para receber os dados digitados, ela começa vazia
let linhas = '';//criei linha vazia e será usada para constuir as linhas da tabela

form.addEventListener('submit', function (e){ //começa a escuta sempre que submit for acionado
    e.preventDefault (); // evita que o formulário recarregue a pag

    adicionaLinha();// chama a função adicionaLinha quando submit é apertado
    atualizaTabela ();// chama a função atualizaTabela quando submit é apertado

});

function adicionaLinha () { //verifica se um nome já foi cadastrado, adiciona uma linha à tabela e limpa os campos do formulário.
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    const inputEmail = document.getElementById('email');

    if (nome.includes (inputNome.value)) { // se o nome estiver incluido no valor de nome, ele manda um alert
        alert(`O nome ${inputNome.value} já foi cadastrado e não pode ser repetido!`);
    } else {
    nome.push (inputNome.value);//se não tiver sido cadastrado, o push vai jogar ele na array e cadastrar

    let linha = `<tr>`; //este trecho de código está criando uma representação HTML de uma linha de tabela contendo as informações fornecidas nos campos de entrada do formulário
    linha += `<td>${inputNome.value} </td>`;
    linha += `<td>${inputTelefone.value} </td>`;
    linha += `<td>${inputEmail.value} </td>`;
    linha += '</tr>';//fecho o tr que abri em cima

    linhas += linha;// depois de escrever a linha concatenamos com linhas
    
    }
    inputNome.value = '';// aqui zera o formulário depois de submetido
    inputTelefone.value = '';// aqui zera o formulário depois de submetido
    inputEmail.value = '';// aqui zera o formulário depois de submetido
}

function atualizaTabela () { //atualiza o conteúdo da tabela com as linhas construídas anteriormente.
    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;//isso substitue todo o conteudo do 'tbody' pelo conteudo das 'linhas'
}


