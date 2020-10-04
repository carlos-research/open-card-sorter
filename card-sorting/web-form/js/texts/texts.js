var texts = {
    appTitle: [ `Open Card Sorter` ],
    introTitle: [ `Vamos começar%userNameComma?` ],
    introText: [
        `Nesta atividade de card sorting, conto com a sua colaboração para verificar qual o seu entendimento da melhor relação entre os construtos (grupos) e itens (cards) propostos.`,
        `Essa atividade dura em torno de <b>10 a 15 minutos</b> para ser completada. É rápido e sua contribuição será muito valiosa na pesquisa!`,
    ],
    introPreAuth: [
        `Para começar, coloque seu nome e sobrenome`,
    ],
    start: [`Iniciar`],
    nameInputPlaceholder: [`Digite seu nome`],
    // googleConnectPlaceholder: [`Aguarde...`],
    googleAuthConnect: [ `Conectar com Google` ],
    googleAuthConnectAs: [ `Continuar como` ],
    googleAuthDisconnect: [ `Desconectar` ],
    sidebarTitle: [`Cartões`],
    sidebarSubtitle: [`%n de %n cartões agrupados.`],

    newCardGroup: [`Arraste para criar um novo grupo`],
    cardTopDivider: [`<strong>Topo</strong>: mais relevante`],
    cardBottomDivider: [`<strong>Fundo</strong>: menos relevante`],
    cardGroupTitlePlaceholder: [`Dê um nome ao grupo`],

    steps: [
        {
            title: [`Passo 1`],
            text: [
                `Olhe os cartões do lado esquerdo, %userName.`,
                `Sua tarefa será organizar esses cards entre seis colunas (dinamismo ambiental, sensing, seizing, transforming, digitalização das capacidades ordinárias, desempenho organizacional) de forma que façam sentido para você.`,
                `Arraste um dos cards para a direita para criar a primeira coluna (grupo).`
            ]
        },
        {
            title: [`Passo 2`],
            text: [
                `Mova os cartões ao lado até que todos estejam agrupados entre as seis colunas propostas. Agrupe cartões que você considera relacionados. Você pode posicionar os cartões entre as 6 colunas e formar grupos com o número de cartões que considerar adequado!`,
                `Lembre-se, %userName: não tem certo ou errado, você escolhe como agrupar os cartões de acordo com o que fizer mais sentido para você!`
            ]
        },
        {
            title: [`Passo 3`],
            text: [
                `Revise os grupos e <strong> verifique se constam os 6 grupos</strong> propostos. Lembrando os grupos: dinamismo ambiental, sensing, seizing, transforming, digitalização das capacidades ordinárias, desempenho organizacional.`,
            ]
        },
        {
            title: [`Passo 4`],
            text: [
                `Certifique-se de ordenar os cards mais relevantes para cima e os menos relevantes para baixo em cada grupo.`,
            ]
        },
        {
            title: [`Passo 5`],
            text: [
                `Parece que ficou bom, %userName! Dê uma revisada final e depois é só clicar em “Finalizar” ali em cima para terminar.`,
            ]
        }
    ],
    stepsRemainingTitle: [`Está faltando algum passo para você completar sua atividade`],
    stepsRemainingText: [`Verifique se você completou a tarefa abaixo:`],

    endingTitle: [ `Obrigado%userNameComma!` ],
    endingText: [
        `Sua colaboração vai ajudar bastante na construção de uma pesquisa direcionada a transformação digital em cooperativas na perspectiva das capacidades dinâmicas.`,
        `Muito obrigado pela participação!`,
    ],

    infoButton: [ `Instruções` ],
    finishButton: [ `Finalizar` ],
    resetButton: [ `Reiniciar` ],

    anonymousLabel: [ `Anônimo` ],

    alerts: {
        generic: {
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        steps: {
            title: [`Instruções`],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        noKeys: {
            title: [`Código App Script não encontrado`],
            text: [
                'Verifique se você gerou o link corretamente e reinicie a página.'
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        noSheet: {
            title: [`Falha ao conectar`],
            text: [
                `Não foi possível acessar os dados para iniciar este card sorting. Verifique o link ou tente novamente atualizando a página.`,
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Tentar novamente`], action: "refresh" },
                { class: [`btn-secondary`], text: [`Fechar`], action: "close" },
            ]
        },
        saveFail: {
            title: [`Falha ao salvar atividade`],
            text: [
                `Não foi possível acessar o servidor.`,
                `Aguarde um pouco e tente novamente atualizando a página.`
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" },
                { class: [`btn-secondary`], text: [`Reiniciar`], action: "refresh" },
            ]
        },
    },
}
