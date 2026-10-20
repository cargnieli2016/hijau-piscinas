# Hijau Piscinas e Acessórios

Site institucional da Hijau Piscinas, em Monte Mor - SP. Apresenta serviços, projetos, endereço e formas de contato para quem procura soluções para piscinas.

## O que você encontra

- Construção e reforma de piscinas de fibra, vinil e alvenaria
- Capas térmicas e de proteção
- Cercas de proteção de vidro e removíveis
- Projetos, iluminação e produtos para tratamento da água
- Galeria de obras, localização e contato direto pelo WhatsApp

## Tecnologias

- React 19 e TypeScript
- TanStack Start e TanStack Router
- Vite 8
- Tailwind CSS 4

## Executar localmente

Requisitos: Node.js 22.12 ou superior e npm.

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite no terminal.

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o site para publicação em `dist/client` |
| `npm run preview` | Abre uma prévia local do build |
| `npm run lint` | Verifica o código com ESLint |
| `npm test` | Executa os testes |

Para conferir o build localmente:

```bash
npm run build
npm run preview
```

## Publicação

O build gera os arquivos estáticos do site em `dist/client`. Publique **o conteúdo dessa pasta**, mantendo `index.html` na raiz do site publicado.

### GitHub Pages

Configure a publicação do GitHub Pages para gerar o projeto com `npm run build` e publicar `dist/client` como artefato do site. Se o site for publicado em um endereço de projeto (por exemplo, `usuario.github.io/nome-do-repositorio`), confira se os caminhos dos arquivos estáticos funcionam nesse endereço.

### Cloudflare Pages

Nas configurações do projeto Cloudflare Pages, use:

- **Comando de build:** `npm run build`
- **Diretório de saída:** `dist/client`
- **Diretório raiz:** a pasta que contém este `package.json`

## Estrutura relevante

```text
public/
  assets/       Imagens e vídeo usados no site
  favicon.png   Ícone do site
  robots.txt    Regras de rastreamento
src/
  routes/       Rotas e páginas
  lib/          Utilitários da aplicação
dist/client/    Site estático gerado pelo build
```

## Contato

Hijau Piscinas e Acessórios  
Monte Mor - SP  
WhatsApp: [(19) 98973-7720](https://wa.me/5519989737720)
