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

- Marque a opção Utilizar os servidores do Registro.br
- Clique em Salvar & Editar DNS
- Clique em Modo Avançado
- Agora clique em +Record para setar o DNS do seu projeto no github.

### Edição de Zona

O Github agora disponibiliza dois endereços para seus servidores DNS. É preciso cadastrar os dois para o mesmo domínio.

- Deixe o campo de subdomínios vazio.
- No campo Tipo selecione A.
- No campo Dados coloque o seguinte endereço: 192.30.252.153
- Clique em +Record para abrir um novo cadastro.

Repita a operação cadastrando o segundo ip 192.30.252.154.

Agora precisamos colocar o subdomínio www para funcionar também.

- No campo subdomínio coloque www.
- No campo Tipo escolha CNAME
- No campo Dados coloque o endereço utilizado no arquivo CNAME de seu projeto: seuprojeto.com.br.
- Clique em Salvar.

Pronto!

### Observações

O tempo para que as alterações de DNS sejam visíveis para toda a internet é de até 24 horas, segundo o próprio registro.br

As alterações feitas no branch gh-pages do GitHub podem demorar até 10 minutos para que tenham efeito, segundo o próprio GitHub.

## Mais informações e referências

Acesse a página de ajuda do [GitHubPages](https://help.github.com/categories/20/articles) para mais informações sobre a criação de sites diferenciados para seu projeto, com templates, páginas de erro, redirecionamento, entre outras coisas.

https://webpack.js.org/loaders/sass-loader/

https://dev.to/deepanjangh/setting-up-css-and-sass-with-webpack-3cg

https://github.com/hughsk/google-fonts/tree/master
