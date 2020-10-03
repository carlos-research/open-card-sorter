var texts = {
    appTitle: [ `Open Card Sorter` ],
    introTitle: [ `Vamos começar%userNameComma?` ],
    introText: [
        `Nesta atividade de card sorting, conto com sua colaboração para verificar como você relaciona os itens listados em 6 colunas, para validarmos o modelo da pesquisa.`,
        `Ela dura em torno de <b>10 a 15 minutos</b> para ser completada. É rapidinho e sua colaboração vai ajudar muito!`,
    ],
    introPreAuth: [
        `Para começar, como posso te chamar?`,
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
                `Dá uma olhada nos cartões ao lado, %userName.`,
                `Sua tarefa será organizar esses cards em 6 colunas (dinamismo ambiental, sensing, seizing, transforming, digitalização das capacidades ordinárias e desempenho organizacional) de forma que faça sentido para você.`,
                `Arraste um dos cards para a direita para iniciar seu primeiro grupo. A proposta é que ao final você tenha distribuído os cards nos 6 grupos mencionados.`
            ]
        },
        {
            title: [`Passo 2`],
            text: [
                `Mova os cartões ao lado até que todos estejam agrupados. Agrupe cartões que você considera relacionados. Por favor, crie seis grupos com os seguintes títulos (dinamismo ambiental, sensing, seizing, transforming, digitalização das capacidades ordinárias e desempenho organizacional), o número de cartões em cada grupo fica a seu critério!`,
                `Lembre-se, %userName: não tem certo ou errado, você escolhe como agrupar os cartões de acordo com o que fizer mais sentido para você!`
            ]
        },
        {
            title: [`Passo 3`],
            text: [
                `Revise os grupos e <strong>verifique se para cada um</strong> tem um dos nomes indicados. Avalie a relação entre o título e os cartões contidos nele.`,
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
        `Sua atividade vai ajudar bastante na construção de uma pesquisa voltada a digitalização das cooperativas e a análise das capacidades envolvidas.`,
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
