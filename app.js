const amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value;

  // Validação: nome não pode ser vazio
  if (nomeAmigo.trim() === "") {
    alert("Por favor, digite um nome válido.");
    return; // Sai da função se o nome for inválido
  }

  amigos.push(nomeAmigo); // Adiciona o nome ao array
  atualizarListaAmigos(); // Atualiza a lista no HTML
  document.getElementById("amigo").value = ""; // Limpa o campo de texto
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  // Cria um item de lista (`<li>`) para cada amigo
  amigos.forEach(amigo => {
    const itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  });
}

function sortearAmigo() {
  // Verifica se há pelo menos dois amigos para o sorteio
  if (amigos.length < 2) {
    alert("É necessário ter pelo menos dois amigos na lista para o sorteio.");
    return;
  }

  // Sorteio: gera um índice aleatório dentro do array de amigos
  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  // Exibe o resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa resultados anteriores

  const itemResultado = document.createElement("li");
  itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultado.appendChild(itemResultado);
}