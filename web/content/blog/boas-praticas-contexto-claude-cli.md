---
title: "Boas práticas para usar contexto no Claude CLI"
slug: "boas-praticas-contexto-claude-cli"
description: "O contexto que você fornece ao Claude CLI determina a qualidade do que você recebe de volta. Entender como estruturá-lo bem é uma das alavancas mais subestimadas de produtividade com IA."
date: "2026-03-31"
tags: ["AI", "developer tools", "engenharia de software"]
author: "Fabio Cirone"
status: published
---

Quando um desenvolvedor reclama que o Claude "não entende o projeto" ou "fica repetindo código errado", o problema raramente é o modelo. Quase sempre é o contexto — ou a ausência dele. O Claude CLI opera em janelas de contexto com limite finito, e o que você coloca nessa janela determina, de forma direta, a utilidade do que volta. Isso soa óbvio, mas as implicações práticas são menos triviais do que parecem.

## O CLAUDE.md não é documentação — é instrução operacional

A maioria das equipes que começa a usar o Claude CLI trata o arquivo `CLAUDE.md` como um README sofisticado. Escreve um parágrafo sobre o projeto, lista as tecnologias usadas e para por aí. O resultado é que o modelo ignora contexto relevante e continua gerando código que não respeita convenções locais, estrutura de diretórios, ou restrições específicas do domínio.

O `CLAUDE.md` funciona melhor quando é tratado como um conjunto de instruções operacionais: o que o modelo deve fazer, o que deve evitar, e qual é o contrato de qualidade esperado. Isso inclui coisas como a linguagem de todas as respostas escritas, onde colocar novos arquivos, quais padrões de naming seguir, como lidar com status de draft versus publicado. Não é documentação para humanos — é contexto para o agente.

Um exemplo concreto: em um projeto de blog com geração automatizada de posts, o `CLAUDE.md` pode especificar que todos os posts devem ser escritos em Português Brasileiro, que o `status` nunca deve sair como `published`, e qual é o passo a passo para criar, commitar e abrir um pull request. Com essas instruções no arquivo, você não precisa repetir isso em cada prompt. Sem elas, você vai corrigi-lo toda vez.

## Contexto de conversa é um recurso escasso

A janela de contexto do Claude CLI é finita. Em sessões longas, o histórico de conversa compete com o código e as instruções pelo espaço disponível. Quando a janela enche, o modelo começa a perder referências anteriores — o que parece comportamento errático, mas é simplesmente uma consequência do limite físico.

A implicação prática é que sessões de trabalho longas, com muitas idas e vindas, degradam progressivamente a qualidade das respostas. A estratégia mais eficaz não é tentar preservar tudo — é estruturar o trabalho em sessões menores e bem delimitadas, cada uma com contexto explícito suficiente para ser independente.

Para tarefas de maior escopo, isso significa dividir o trabalho em etapas e começar sessões novas entre elas, em vez de acumular tudo em uma conversa única. O custo de iniciar uma nova sessão com contexto limpo é menor do que o custo de trabalhar com um modelo que perdeu referências importantes no meio de uma tarefa.

Também vale notar que o Claude CLI tem acesso a ferramentas como leitura de arquivos e execução de comandos. Isso significa que parte do contexto pode ser carregada sob demanda, em vez de estar disponível logo de cara. Um prompt que instrui o modelo a ler um arquivo específico antes de agir é mais eficiente do que colar o conteúdo desse arquivo no prompt toda vez.

## O que colocar no contexto — e o que deixar de fora

Existe um erro simétrico ao de não fornecer contexto suficiente: fornecer contexto demais. Incluir arquivos inteiros de configuração, histórico de commits, ou documentação que raramente é relevante para a tarefa imediata consome espaço sem agregar precisão. O modelo tende a distribuir atenção de forma relativamente uniforme pelo contexto disponível — mais contexto irrelevante significa menos atenção no que importa.

A regra prática é: contexto de alta especificidade bate contexto de alta quantidade. Um trecho de código de 50 linhas diretamente relevante para a tarefa é mais útil do que 500 linhas de arquivos adjacentes que "podem ser úteis". Se você está pedindo para o modelo modificar uma função, referencie a função — não o módulo inteiro.

Para projetos com múltiplos domínios, considere ter `CLAUDE.md` em subdiretórios, cada um com instruções específicas para aquela área. O Claude CLI respeita essa hierarquia. Isso evita que as instruções de um domínio poluam o contexto de outro e mantém as instruções próximas do código que descrevem.

## Memória persistente versus contexto de sessão

O Claude CLI oferece um sistema de memória que persiste entre sessões — diferente do contexto de conversa, que se reinicia a cada sessão nova. Essa distinção importa: memória é para o que deve ser lembrado indefinidamente (preferências, decisões de projeto, padrões confirmados), contexto de sessão é para o que é relevante agora.

O erro mais comum é tentar usar o contexto de sessão como memória — repetir em cada prompt informações que deveriam estar em alguma forma de memória persistente. O inverso também acontece: salvar em memória coisas que são específicas de uma tarefa em andamento e que vão ser irrelevantes na próxima sessão.

Uma heurística útil: se você se pega copiando o mesmo trecho de informação em múltiplos prompts ao longo de dias diferentes, isso pertence à memória ou ao `CLAUDE.md`. Se é algo que só faz sentido no contexto da tarefa atual, pertence ao prompt.

## Instruções ambíguas custam mais do que parecem

Quando uma instrução é ambígua, o modelo toma uma decisão — e nem sempre a que você esperava. O custo não é apenas o erro em si, mas o ciclo de correção que vem depois: você identifica o problema, reformula, o modelo tenta de novo, e parte do contexto já foi consumida por essa iteração.

Instruções precisas reduzem esse ciclo. "Escreva em Português" é menos eficaz do que "Escreva em Português Brasileiro — isso se aplica ao título, à descrição, às tags e ao corpo do texto". A segunda versão fecha o espaço de interpretação. Para quem usa o Claude CLI em fluxos de automação ou com múltiplos colaboradores, essa precisão não é capricho — é o que separa um sistema confiável de um que funciona às vezes.

O contexto bem estruturado não é uma forma de "enganar" o modelo ou fazê-lo seguir ordens. É simplesmente fornecer as informações que ele precisa para tomar decisões alinhadas com o que você quer. Modelos de linguagem são, em última análise, sistemas de completação — e a qualidade da completação depende diretamente da qualidade do que vem antes.
