// ============================
// QUIZ RONALD MIRANDA
// ============================

let indice = 0;

let pontos = {
    ansioso: 0,
    seguro: 0,
    evitativo: 0,
    controlador: 0
};

const titulo = document.querySelector(".quiz-box h2");
const alternativas = document.querySelector(".alternativas");
const progresso = document.querySelector(".progresso");
const passo = document.querySelector(".passo strong");

function carregarPergunta() {

    const pergunta = perguntas[indice];

    titulo.innerHTML = pergunta.pergunta;

    passo.innerHTML = indice + 1;

    progresso.style.width =
        ((indice + 1) / perguntas.length) * 100 + "%";

    alternativas.innerHTML = "";

    pergunta.respostas.forEach(resposta => {

        const botao = document.createElement("button");

        botao.innerHTML = resposta.texto;

        botao.onclick = () => responder(resposta.perfil);

        alternativas.appendChild(botao);

    });

}

function responder(perfil) {

    pontos[perfil]++;

    indice++;

    if (indice < perguntas.length) {

        carregarPergunta();

    } else {

        mostrarResultado();

    }

}

function mostrarResultado() {

    let vencedor = "";

    let maior = 0;

    for (let perfil in pontos) {

        if (pontos[perfil] > maior) {

            maior = pontos[perfil];
            vencedor = perfil;

        }

    }

    const resultados = {

        ansioso: {

            titulo: "Ansioso",

            descricao:
                "Você tende a antecipar problemas, pensar excessivamente e permanecer em estado de alerta. A terapia pode ajudá-lo a compreender essas dinâmicas e desenvolver uma relação mais saudável com suas emoções."

        },

        seguro: {

            titulo: "Em busca de equilíbrio",

            descricao:
                "Suas respostas indicam boa capacidade de adaptação emocional. Ainda assim, aprofundar o autoconhecimento pode fortalecer ainda mais seus relacionamentos e sua qualidade de vida."

        },

        evitativo: {

            titulo: "Evitativo",

            descricao:
                "Você tende a guardar sentimentos, evitar conflitos e enfrentar sozinho as dificuldades. A terapia oferece um espaço seguro para compreender essas estratégias e ampliar sua liberdade emocional."

        },

        controlador: {

            titulo: "Controlador",

            descricao:
                "Você costuma assumir responsabilidades e buscar manter tudo sob controle. Isso pode gerar sobrecarga e ansiedade quando as situações fogem do esperado."

        }

    };

    const resultado = resultados[vencedor];

    document.querySelector(".quiz-box").innerHTML = `

        <h2>Seu resultado</h2>

        <h1 style="color:#0E7377;margin:20px 0;">
            ${resultado.titulo}
        </h1>

        <p style="margin-bottom:35px;">
            ${resultado.descricao}
        </p>

        <p style="font-size:14px;color:#777;margin-bottom:30px;">
            Este resultado não representa um diagnóstico psicológico ou psicanalítico.
            Ele é apenas um indicativo baseado nas respostas fornecidas.
        </p>

        <a class="botao"
        target="_blank"
        href="https://wa.me/5521967010016?text=Olá Ronald! Acabei de fazer o quiz do seu site e gostaria de entender melhor meu resultado.">
            Conversar pelo WhatsApp
        </a>

    `;

}

carregarPergunta();