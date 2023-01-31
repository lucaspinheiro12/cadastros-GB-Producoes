package com.gbproducao.cadastrogbp.service.exeption;

public class NegociosExeption extends RuntimeException {

	private static final long serialVersion = 1L;
	
	public NegociosExeption (String message) {
		super(message);
	}
}