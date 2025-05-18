let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const botao = document.querySelector("nav button");
  if (botao) botao.textContent = `Ver Carrinho (${carrinho.length})`;
}

function adicionarAoCarrinho(produto, preco, descricao = "") {
  carrinho.push({ produto, preco, descricao });
  salvarCarrinho();
  alert(`${produto} adicionado ao carrinho.`);
}

function verCarrinho() {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio.");
    return;
  }
  const resumo = carrinho.map(p => `${p.produto} (${p.descricao}) - R$ ${p.preco.toFixed(2)}`).join("\n");
  const total = carrinho.reduce((t, p) => t + p.preco, 0);
  alert(`${resumo}\n\nTotal: R$ ${total.toFixed(2)}`);
}

function limparCarrinho() {
  if (confirm("Deseja mesmo limpar o carrinho?")) {
    carrinho = [];
    salvarCarrinho();
  }
}

function login() {
  const nome = document.getElementById("username").value;
  if (nome) alert(`Bem-vindo(a), ${nome}!`);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function comprarSaboneteArgila() {
  const tipo = document.getElementById("tipo-argila").value;
  adicionarAoCarrinho("Sabonete de Argila", 15, tipo);
}

function comprarDifusor() {
  const aroma = document.getElementById("aroma-difusor").value;
  adicionarAoCarrinho("Difusor de Ambientes", 55, aroma);
}

function comprarAguaPerfumada() {
  const aroma = document.getElementById("aroma-agua").value;
  adicionarAoCarrinho("Água Perfumada", 45, aroma);
}

// Atualiza o contador do carrinho na primeira carga
atualizarCarrinho();
