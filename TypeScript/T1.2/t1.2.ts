/**
 * Exercício 1.3. Implemente uma classe chamada Complexo para representar números imaginários e esta 
 * deve possuir: Atributos: dois doubles a(Parte real) e b(Parte imaginária).
 *  Métodos:
 *  (1) Construtor;
 *  (2) soma(): recebeviaparâmetrooutronúmerocomplexo(objetodesta classe) e efetua sua soma, ou seja, 
 * parte real será somada com parte real, e parte imaginária com parte imaginária. 
 * (3) multiplica(): recebe via parâmetro outro complexo(objeto desta classe) e efetue
 *  a formula (a+bi)*(c+di) = (ac-bd)+(ad+bc)i
 *  (4) toString(): Mostra uma string na tela com os atributos a e b na notação Complexa a+bi; 
    (5) modulo(): retorna o modulo do número complexo que é dado po |a+bi|=√a2 + b2
     (6) argumentoPrincipal(): retorna o ângulo formado pelo número complexo no plano de argand-gauss 
     que é dado pela fórmula θ = tan−1(b a)
 */
class Complexo{
 a:number;
 b:number;
constructor(a:number,b:number){
    this.a=a;
    this.b=b;
}
 soma(c:number,d:number):void{
    console.log("A soma de   "+c+"+"+d+"i com "+this.a+"+"+this.b+"i e :"+(this.a + c)+"+"+(this.b+d)+"i");
     // alert("A soma e : "+(this.a + c)+"+"+(this.b+d)+"i");
     }
 
     multiplica(c:number,d:number): void{
         console.log("A multiplicacao de  " +c+"+"+d+"i com "+this.a+"+"+this.b+"i e :"+ ((this.a * c) - (this.b * d)) + "+" + ((this.a * d) + (this.b * c)) + "i");
        // alert("A multiplicacao e : " + ((this.a * c) - (this.b * d)) + "+" + ((this.a * d) + (this.b * c)) + "i");
     }
     mostrar(): void{
         console.log(this.a+"+"+this.b+"i");
       //  alert(this.a+"+"+this.b+"i");
         
     }
     modulo(): number{
        
         return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
     }
     argumentoPrincipal(): number{
       /* tangente:number;
        cosseno:number;
        seno:number;
        cosseno=this.a/this.modulo();
        seno=this.b/this.modulo();
        tangente=seno/cosseno;*/
        return Math.pow(((this.b/this.modulo())/(this.a/this.modulo())), -1) * (this.a / this.b);
    }
   
}


var c = new Complexo(1,2);

//c.a = 1;
//c.b = 2;
c.soma(5, 2);
c.multiplica(1, 1);
c.mostrar();
console.log("O modulo e : "+c.modulo());
console.log("O argumento : "+c.argumentoPrincipal());