const form = document.getElementById("form-contato")
const tabela = document.getElementById("corpo-tabela")

form.addEventListener("submit",function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
        // Valida o telefone
    if (!validarTelefone(telefone)) {
        alert("Telefone inválido! Use o formato (XX) XXXXX-XXXX.");
        return;
    }

    // Adiciona na tabela (já formatado)
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;

    tabela.appendChild(novaLinha);

    form.reset();
})

// Função para formatar o telefone
function formatarTelefone(input) {
    // Remove tudo que não é número
    let numero = input.value.replace(/\D/g, '');

    // Formatação: (XX) XXXXX-XXXX
    if (numero.length > 0) {
        numero = `(${numero.substring(0, 2)}) ${numero.substring(2, 7)}-${numero.substring(7, 11)}`;
    }

    // Atualiza o campo
    input.value = numero;
}

// Função para validar se tem apenas números (antes de cadastrar)
function validarTelefone(telefone) {
    const numeroLimpo = telefone.replace(/\D/g, '');
    return numeroLimpo.length >= 10; // Exige DDD + 8 dígitos
}