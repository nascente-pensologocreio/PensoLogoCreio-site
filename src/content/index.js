// src/content/index.js

// Importa cada post individualmente
import { postData as post1 } from './pomar-em-chamas.js'; // Novo
import { postData as post2 } from './beijo-e-espada.js'; // Principal (para layout)
import { postData as post3 } from './quando-o-menos-e-mais.js'; // Antigo


// 1. Reúne todos os posts na ordem de exibição da HOMEPAGE:
export const allPosts = [
    post2, // 1º: Entre o Beijo e a Espada (Principal - Tem imagem e layout 2 colunas)
    post1, // 2º: Pomar em Chamas (Secundário 1)
    post3, // 3º: Quando Menos é Mais (Secundário 2)
];

// 2. Exporta o post que deve aparecer em destaque (o primeiro da lista)
export const mainPost = allPosts[0];

// 3. Exporta os posts que devem aparecer na lista secundária (do segundo em diante)
export const secondaryPosts = allPosts.slice(1);