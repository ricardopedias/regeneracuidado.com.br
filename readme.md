# Site Regenera Cuidado

# Configurando um domínio próprio

## No github

Para isso crie um arquivo chamado CNAME nesse mesmo branch e coloque dentro dele 
o nome do domínio personalizado que você desejar. Faça o commit e dê outro push 
no repositório: 

```
echo "seuprojeto.com.br" > CNAME
```

Ok. Pela parte do GitHub já está tudo pronto. Agora falta apenas as configurações de DNS no registro.br.

## No registro.br

Faça o login no site do registro.br e clique no domínio registrado para seu projeto.

Na seção "DNS", existem três opções:

- Você está utilizando os servidores DNS do Registro.br;
- Alterar servidores DNS
- Configurar Zona DNS;

Clique na opção "Configurar Zona DNS" e escolha o "Modo Avançado".

A seguinte mensagem aparecerá:

> No momento, os servidores DNS do domínio se encontram em transição. Servidores DNS externos poderão ser delegados em seu domínio em aproximadamente 2h4m45s

Clique novamente na opção "Configurar Zona DNS" e adicione "Nova Entrada" com as seguites opções:

| Tipo | Nome | Endereço |
|:--:  |:--:  |:--:      |
| A    | regeneracuidado.com.br | 185.199.108.153 |
| A    | regeneracuidado.com.br | 185.199.109.153 |
| A    | regeneracuidado.com.br | 185.199.110.153 |
| A    | regeneracuidado.com.br | 185.199.111.153 |
| CNAME| www | regeneracuidado.com.br |

Clique em "Salvar alterações"

### Agora é aguardar

O tempo para que as alterações de DNS sejam visíveis para toda a internet é de até 24 horas, segundo o próprio registro.br

As alterações feitas no branch gh-pages do GitHub podem demorar até 10 minutos para que tenham efeito, segundo o próprio GitHub.

## Mais informações e referências

Acesse a página de ajuda do [GitHubPages](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) para mais informações sobre a criação de sites diferenciados para seu projeto, com templates, páginas de erro, redirecionamento, entre outras coisas.

https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

https://webpack.js.org/loaders/sass-loader/

https://dev.to/deepanjangh/setting-up-css-and-sass-with-webpack-3cg

https://github.com/hughsk/google-fonts/tree/master

"html-webpack-plugin": "^5.6.0",
Para processar templates html

"html-loader": "^5.0.0",
Para incluir pedaçõs de templates

https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
