# POOTypeScriptJava
Programação orientada a objetos com java e typescript.
<h6>Playground: http://www.typescriptlang.org/play/</h6>

<h3>TypeScript</h3>
<p>Typescript permite escrever JavaScript do jeito que você realmente quer. </p>
<p>Typescript é um super JavaScript que compila para JavaScript simples.</p>
<p>Qualquer browser. Qualquer host. Qualquer sistema operacional. Código aberto.</p>
<h6>Segundo o site oficial (tradução direta)<h6>


<h1>Instalação do TypeScript:</h1>
<ol><h4>Requisito:</h4>
<li>Ter o nodejs instalado na maquina. Download: https://nodejs.org/en/</li>
</ol>

<ol><h4>Instalação:</h4>
<li>Rode o comando : <b>npm install -g typescript</b> no terminal</li>
<li>Para compilar para javascript : <b> tsc NOMEDOARQUIVO.ts </b></li>
<li>Para executar pelo terminal:<b> node NOMEDOARQUIVO.js </b></li>
<li>Ou pode ser adicionado ao HTML e interpretado pelo browser</li>
</ol>

<ol><h4>HelloWorld:</h4>
<li>Criar um arquivo <b>helloWorld.ts</b></li>
<li>Digitar o codigo: <b>console.log("Hello World"); </b></li>
<li>Compílar usando <b> tsc helloWorld.ts </b></li>
<li>Executar com o comando: <b> node helloWorld.js </b></li>
</ol>


<h4>Relação entre classes:</h4>
<ol><h5>Associação:</h5>
<li>Associação(agregação e composição)(tem um/has a): uma classe A está associada(tem um) a uma classe B quando A possui uma referencia a B.</li>
<li>Determina que as instâncias de uma classe estão de alguma forma ligadas às instâncias da outra classe</li>
</ol>


<h4>Construtor em classes:</h4>
<ol>
<li>É algo executado na criacao do objeto(new), serve para inicializar os objetos (reservar um espaço na memória na instacia do objeto). Aqui podemos, tambem executar rotinas iniciais.</li>
<ol><h5>this</h5></li>
<li>É um operador de referência. Ele aponta para a variavel "global" da classe quando se está em um escopo "local". Serve para destinguir variaveis com o mesmo nomes em escopos diferentes. EX: Classe e construtor</li>
</ol>

<li><h5>Enum</h5></li>
<li>Enum sao valores que representam dados que possuem uma quantidade limitada de possibilidades.</li>
</ol>

<h4>Modificadores de acesso:</h4>
<ol><h5>Atributos:</h5>
<li>Leitura: uso de um atributo em uma expressão/atribuição ex: (escrita)int a = obj.x(leitura)</li>
<li>Escrita: quando atribui um valor a um atributo. ex: obj.x = 4 </li>

</ol>

<ol><h5>Método:</h5>
<li>Chamada: Quando queremos executar um método. (x: obj.método();)</li>
</ol>

<ol><h5>Modificadores:</h5>
<li>public - Todas as classes possuiram acesso a este membro(atributo ou método).</li>
<li>private - Nenhuma classe fora do escopo da próprio classe tem acesso.</li>
<li>default - Todas as classes do mesmo pacote teram acesso.</li>
<li>protected - Todas as classes e subclasses terao acesso.</li>
</ol>

<ol><h5>Getter e Seter :</h5>
<li>CGetter: Ele prove um acesso de leitura a um atributo.</li>
<li>Setter: Prove um acesso de escrita</li>
</ol>

<ol><h5>Stitac:</h5>
<li>Stitac - Desacopla o membro(atributo ou metodo) de sua instancia.</li>
</ol>


