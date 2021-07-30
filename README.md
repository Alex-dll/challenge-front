
# Bem vindo(a) ao desafio de frontEnd para a Agência E-Plus

## Desafio

- Codificar o layout que segue no projeto, consumir um json via xhttp que retornará uma lista de produtos na resposta do request e servirá para alimentar/manipular o mini-cart.

### Detalhes da aplicação

> #### Apresentação ![Behaviors](https://github.com/Alex-dll/challenge-front/blob/main/public/Challenger.gif?raw=true)


## Como executar o projeto
	
Clone esse projeto	
```bash
  git clone https://github.com/Alex-dll/challenge-front
```

Va para o diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install | yarn install
```

Inicie o servidor 

```bash
  npm run start | yarn start
```

Inicie a aplicação

```bash
  npm run dev | yarn dev
```
  

## Solução para os principais problemas
### Criando uma Fake API
Para criar uma fake api usei um pacote chamado json-server, ele me da uma API REST com uma rota que especifico dentro do package.json, depois basta consumir a API e tratar os dados.

### Consumindo a API
Para resolver esse desafio foi usado a biblioteca Axios. Todas as requisições foram feitas através dela.

Para isso criei um serviço chamado 'api' e coloquei uma url de base que seria o ponto de inicio das nossas rotas. 

Para usar ela basta a invocar passando como parâmetro a rota que preciso acessar.

No nosso código a usei assim:

    api.get<Cart>(`/cart/`)



### Formatação do preço total.
Para resolver esse desafio criei uma ferramenta chamada 'formatPrice' usando a API 'Intl' do navegador.

Ela foi um dos grandes problemas, a API usada nos devolve um valor inteiro e o 'Intl' precisa de uma informação float para identificar as casas decimais. 

Precisei converter os valores recebidos pela aplicação com o seguinte código

    const sumCartValue =

    cart.item.reduce((sumTotal, product) => {
    
    return sumTotal + product.bestPrice
    
    }, 0)
       
    const price = sumCartValue;
    
    const beforeDot = price.toString().substring(0, price.toString().length -  2);
    
    const afterDor = price
    
    .toString()
    
    .substring(price.toString().length -  2, price.toString().length);
    
    const fullPrice =  parseFloat(beforeDot +  '.'  + afterDor);   
    
    const formattedPrice =  formatPrice(fullPrice)

Basicamente essa função usa o reduce pra pegar todos os valores dos produtos, depois converte em string, coloca o ponto e  me devolve um numero float ja formatado em reais.

Eu podia melhorar esse codigo adicionando essa função dentro do 'formatPrice'

### Modal do minicart
Esse foi um desafio que me levou ate um pouco de tempo, a principio eu ia usar o React-Modal, mas acabei encontrando algumas dificuldades e por isso preferi fazer o meu próprio. 

Para não deixar algumas funções que o React-Modal ja me da como ao clicar no Esc fechar o modal. Criei alguns hooks para isso. 

O hook 'useOnKeyPressedHandlers' escuta as teclas do meu teclado e ao escutar o Escape ou Esc ele chama uma função que no meu uso foi fechar o modal.

Já o 'useCartDetailsModal' guarda alguns status pra que caso o minicart seja exibido em outra tela toda a sua funcionalidade permaneça integra.

### Componentização  
 Eu preferi dividir a aplicação em 3 componentes
 - CartModal: Podemos o chamar também de mini cart, ele e o componente principal da nossa aplicação e da toda a vida ao carrinho.
- Header: Ele e o componente do nosso cabeçalho e recebe o componente CartModal onde e mostrado o nosso minicart
- ProductItem: Ele e o nosso componente responsável por nos mostrar um produto e suas respectivas informações

### Listagem dos produtos

Para realizar a listagem dos produtos eu usei o map do javascript, precisei passar as propriedades para o componente e isso foi feito usando o '...spreed operator' 

    {cart.item.map(product  => (
    	<ProductItem
    		key={product.productId}
    		{...product}
    	/>
    ))}

### Tipagem 
A tipagem e um recurso muito importante, criar uma documentação para todas as nossas funções de forma simples e incrível. 
As tipagems foram definidas em seus respectivos componentes na parte de produtos eu preferi exportar ela para o componente ProductItem

## 🛠 Ferramentas usadas ⌨
- NextJS
- ReactJS
- Type Script
- Axios
- Scss

## Considerações finais

Eu poderia melhorar essa aplicação em vários aspectos como exibir os produtos em uma home, desenvolver uma  outra pagina mobile totalmente repagina junto da sua reponsividade, remover algumas funções dos componente e refatoralas em hooks e algumas outras coisas.

No fim das contas foi uma excelente experiência além de uma ótima forma de obter conhecimentos.


----------

🚀Foguete não tem ré
