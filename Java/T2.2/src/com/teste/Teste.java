package com.teste;

import com.banco.Cliente;

public class Teste {

	public static void main(String[] args) {
		
		Cliente c1 = new Cliente("Mark", 1500, 1000);
		System.out.println("O nome do titular da conta é: " + c1.getNome());
		System.out.println("Seu saldo em conta é: R$" + c1.getSaldo());
		System.out.println("Seu limite é: R$" + c1.getLimite());
		System.out.println("Seu saldo + limite é: R$" + c1.checarSaldo());
		c1.sacar(5000);
		c1.sacar(1000);
		c1.depositar(550);
		Cliente c2 = new Cliente("Bill", 3000, 2000);
		System.out.println("O nome do titular da conta é: " + c2.getNome());
		System.out.println("Seu saldo em conta é: R$" + c2.getSaldo());
		System.out.println("Seu limite é: R$" + c2.getLimite());
		System.out.println("Seu saldo + limite é: R$" + c2.checarSaldo());
		c2.sacar(3000);
		c2.sacar(3000);
		c2.depositar(225);
		c1.transf(c1, c2, 5000);
		c1.transf(c1, c2, 1000);
		c2.transf(c2, c1, 6000);
		c2.transf(c2, c1, 2000);
				
	}

}
