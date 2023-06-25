
interface Tributavel {
    CalculoTributo(): number;
}


/*
MODIFICADOR DE ACESSO.

PUBLIC : é o modificador padrão. Tudo o que for declarado sem
um modificador de acesso automaticamente se torna público.

PRIVATE: com este modificador, estamos dizendo que esse atributo ou método
não pode ser acessado de fora da classe em que ele foi declarado.

PROTECTED: é bem parecido com o ​ ​private​ ​, a diferença entre eles é que o ​ ​protected​ ​ pode ser acessado
de uma classe que herda de uma outra classe.


*/


abstract class Conta {
    /* variaveis são chamado de atributos */
    private readonly _numeroDaConta: number;
    titular: string;
    private _saldo: number;

    /* NOS PRECIAMOS CRIAR UM CONSTRUTOR PARA A NOSSA CLASSE ATRIBUIR 
        OS VALORES DO SEU PARÂMETRO AOS NOSSO ATRIBUTOS */
    constructor(titular: string, saldo: number) {
            this._numeroDaConta = Math.floor( Math.random() * 1000) + 1;
            this.titular = titular;
            this._saldo = saldo;
        }


    /*  O METODO E RESPONSÁVEL POR IDENTIFICAR E EXECUTAR AS OPERAÇÕES QUE A CLASSE FORNECE */ 
    
    protected consultarSaldo(): number {
        return this._saldo;
    }

    protected adicionalSaldo(saldo: number): void { 
        this._saldo = this._saldo + saldo;
    }
    
    protected sacarDoSaldo(valor: number): void {
        this._saldo -= valor;
    }

    get numeroDaconta(): any {
        return this._numeroDaConta;
    }


}

export { Conta }


/*

A herança otimiza a produção da nossa aplicação em tempo e linhas de código. Através dela, 
podemos herdar os métodos e os atributos de uma outra classe.

para herdarmos uma classe, nós utilizamos a palavra reservada ​ ​extends​ ​.

super​​ ela é utilizada para passar os valores que estamos recebendo 
via construtor para o construtor da nossa classe pai.

*/


/*

Note que, quando você implementou a interface ​ ​Tributavel​ ​, o compilador identificou que dentro desse contrato
 tem um método chamado ​ ​CalculaTributo()​ ​ e sublinhou a classe em vermelho passando a notificação de que o 
 método deve ser implementado:

*/

class ContaPF extends Conta implements Tributavel{
    'cpf': number;
    constructor(cpf: number, titular: string, saldo: number) {
        super(titular, saldo);
        this.cpf = cpf;
    }  

    consultar(): string { 
        return `Saldo Atual: ${this.consultarSaldo()}`
    }

    sacar(valor: number) { 
        if (this.consultarSaldo() > 0 && valor <= this.consultarSaldo()) {
            this.sacarDoSaldo(valor);
        }
    }

    CalculoTributo(): number {
        return this.consultarSaldo() * 0.02;
    }


}

class ContaPJ extends Conta implements Tributavel { 
    'cnpj': number;
    constructor(cnpj: number, titular: string, saldo: number) {
        super(titular, saldo);
        this.cnpj = cnpj;
    }  

    consultar(): string { 
        return `Saldo Atual: ${this.consultarSaldo()}`
    }

    sacar(valor: number){
        this.sacarDoSaldo(valor);
    }

    CalculoTributo(): number {
        return this.consultarSaldo() + 0.05;
    }
}

/* PARA CRIAR UM OBJETO A PARTIR DA NOSSA CLASSE, NOS PRECISAMOS INSTANCIÁ-LA.  CRIANDO UMA PALAVRA NEW PARA INSTANCIAR, E CRIAR UM NOVO OBJETO A PARTIR DE UMA DETERMINADA CLASSE */
const pessoaJuridica = new ContaPJ(395165185, 'Marcelo Perini', 30000);
console.log(pessoaJuridica.cnpj);
console.log(`O numero da conta é ${pessoaJuridica.numeroDaconta}`);

console.log(pessoaJuridica.CalculoTributo());

