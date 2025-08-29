// Exibir botão ao rolar
window.onscroll = function () {
  const btn = document.getElementById("topoBtn");
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

// Voltar ao topo
document.getElementById("topoBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const botoesComprar = document.querySelectorAll('.botao');
botoesComprar.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Você será redirecionado para o WhatsApp para concluir a compra!');
  });
});
