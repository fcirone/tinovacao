---
title: "Design com Claude para quem não é designer — e o handoff para o Claude Code"
slug: "design-com-claude-handoff-para-claude-code"
description: "Como usar o Claude para construir direção visual e especificações de interface sem ter formação em design, e como transformar esse resultado num handoff que o Claude Code consegue executar bem."
date: "2026-05-27"
tags: ["AI", "design", "claude code", "produto"]
author: "Fabio Cirone"
status: published
---

A maioria dos fundadores e engenheiros que constroem produtos em times pequenos chega num momento específico: a ideia está clara, o back-end funciona, mas a interface precisa de uma direção que ninguém no time consegue dar com confiança. Contratar um designer para uma feature pontual raramente cabe no ciclo. Pegar um template genérico e adaptar nunca encaixa direito. O que mudou é que esse gap pode ser traversado de forma bastante prática usando o Claude — não como substituto de design, mas como parceiro de raciocínio visual para quem não tem esse treinamento.

## O que o Claude entende de design — e o que você precisa trazer

O Claude tem um modelo de design de produto surpreendentemente bom: hierarquia visual, princípios de tipografia funcional, espaçamento, padrões de componentes comuns de UI. Ele não vai reinventar o design system do seu produto, mas consegue articular escolhas razoáveis com justificativa — e isso é o que falta para quem está travado.

O problema usual com prompts de design é que eles partem da tela, não do produto. "Crie um layout para um dashboard financeiro" gera algo genérico. O que funciona é partir do contexto: qual é o usuário, qual é o objetivo principal daquela tela, qual é a ação que precisa ser óbvia, quais são as restrições técnicas ou de plataforma.

Um ponto concreto: pedir ao Claude que justifique cada escolha que ele faz — por que esse componente em vez de outro, por que essa hierarquia — produz dois resultados úteis. Primeiro, você aprende a linguagem para iterar. Segundo, ele expõe premissas que podem estar erradas para o seu contexto. Se a justificativa não faz sentido para o seu produto, a escolha provavelmente também não faz.

Pedir variações deliberadas — "agora com mobile-first como prioridade", "agora assumindo que o usuário está em contexto de baixa atenção" — é mais eficiente do que tentar acertar no primeiro prompt. O custo de iteração aqui é zero.

## Construindo o artefato de handoff

O passo que mais gente pula é transformar a conversa de design numa especificação estruturada antes de passar para o Claude Code. Passar o histórico de uma conversa de design direto para uma sessão de implementação funciona mal — o modelo vai tomar decisões para preencher as lacunas, e essas decisões raramente são as que você quer.

O artefato de handoff precisa ter algumas coisas:

**Hierarquia de componentes** — uma lista estruturada do que existe na tela, em que ordem, com qual responsabilidade. Não precisa ser Figma; uma descrição textual com indentação funciona. O Claude consegue gerar isso a partir da conversa de design se você pedir explicitamente.

**Estados interativos** — o que muda quando o usuário passa o mouse, clica, está carregando, recebe um erro, não tem dados ainda. A maioria dos artefatos de design informal esquece esses estados e o Claude Code vai inventar comportamentos ou ignorá-los.

**Referências do stack** — se você usa Tailwind, shadcn/ui, Radix, um design system próprio, inclua isso. O Claude Code gera código muito diferente dependendo do que está disponível. "Usa os componentes do shadcn/ui quando existir equivalente" é uma instrução que poupa várias rodadas de refatoração.

**Tokens de cor e tipografia** — não a paleta inteira, mas as variáveis que a tela específica usa. Se o seu projeto já tem tokens definidos, inclua os nomes. Se não tem, o Claude pode ajudar a derivar tokens a partir da direção visual que vocês estabeleceram na conversa anterior.

O Claude consegue gerar esse artefato inteiro a partir de uma conversa de design bem conduzida. Peça especificamente: "Gere um documento de especificação de implementação para essa tela, no formato de hierarquia de componentes com estados e tokens."

## O handoff para o Claude Code — o que funciona e onde quebra

Com o artefato em mãos, o prompt de implementação para o Claude Code fica direto. O padrão que funciona melhor é estruturar em três blocos: contexto do produto (o que essa tela faz e para quem), especificação de componentes (o artefato que você gerou), e restrições de implementação (stack, componentes existentes para reusar, padrões do projeto).

O que não funciona é passar uma descrição vaga e esperar que o modelo adivinhe a intenção. "Crie uma tela de dashboard parecida com isso" com uma imagem de referência produz resultados plausíveis mas incorretos para o seu contexto. O Claude Code performa melhor com especificação explícita do que com inferência visual.

Esse fluxo tem limitações concretas. Animações e microinterações complexas precisam de um nível de especificação que é trabalhoso de articular em texto e fácil de comunicar num protótipo. Comportamento de estado global que envolve múltiplas telas simultaneamente fica ambíguo sem um mapa de fluxo. Acessibilidade profunda — hierarquia semântica correta, foco de teclado, ARIA — o Claude Code faz um trabalho razoável se você pedir explicitamente, mas não é o padrão.

O critério para saber onde o fluxo tem atrito real: animações complexas, acessibilidade profunda, e decisões de marca que exigem julgamento subjetivo sobre o que o produto precisa comunicar. Para essas situações específicas, vale investir mais tempo na especificação ou aceitar uma solução mais simples. Não é falta do Claude — é que o problema em si é ambíguo.

Para quem trabalha sozinho, esse fluxo não é uma muleta para não ter designer: é o próprio processo de design. A diferença entre uma iteração travada e uma feature entregue é conseguir especificar bem o problema. O Claude resolve isso — e resolve bem o suficiente para shippar.
