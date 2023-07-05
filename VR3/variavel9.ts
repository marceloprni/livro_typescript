


class Conta {
    numeroDaConta: number;
    titular: string;
    saldo: number;

    constructor(numeroDaconta: number, titular: string, saldo: number) {
        this.numeroDaConta = numeroDaconta;
        this.titular = titular;
        this.saldo = saldo;
    }
}

export { Conta }