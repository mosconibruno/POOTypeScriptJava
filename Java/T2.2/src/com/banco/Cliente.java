package com.banco;

public class Cliente {
	private String nome;
	private double saldo, limite;
	private Doc doc;
	
	public Cliente(String nome, double saldo, double limite) {
		this.nome = nome;
		this.saldo = saldo;
		this.limite = limite;
		this.doc = new Doc();
	}
	
	public void sacar(double val) {
		
		if(val <= checarSaldo()) {
			this.saldo -= val;
			System.out.println("O saldo atual do " + this.nome + " é: R$" + this.checarSaldo());
		}
		else {
			System.out.println("Saldo insuficiente para o saque");
		}
		
	}
	
	public void depositar(double val) {
		this.saldo += val;
		System.out.println("O saldo atual do " + this.nome + " é: R$" + this.checarSaldo());
	}
	
	public void transf(Cliente c1, Cliente c2, double val) {
		this.getDoc().transferir(c1, c2, val);
	}
	
	public double checarSaldo() {
		return this.saldo + this.limite;
	}

	public Doc getDoc() {
		return this.doc;
	}
	
	public String getNome() {
		return this.nome;
	}

	public double getSaldo() {
		return this.saldo;
	}

	public double getLimite() {
		return this.limite;
	}
	
}
