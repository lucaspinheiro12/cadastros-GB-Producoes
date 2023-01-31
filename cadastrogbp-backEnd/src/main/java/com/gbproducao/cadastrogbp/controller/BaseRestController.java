package com.gbproducao.cadastrogbp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gbproducao.cadastrogbp.service.exeption.NegociosExeption;
import com.gbproducao.cadastrogbp.service.exeption.NoContentExeption;


@RequestMapping("/gbp")
public abstract class BaseRestController {
	
	@ExceptionHandler(NoContentExeption.class)
	public ResponseEntity<Void> handlerNoContent(NoContentExeption exception){
		return ResponseEntity.noContent().build();
	}
	
	@ExceptionHandler(NegociosExeption.class)
	public ResponseEntity<ApiErro> handlerBusinessException(NegociosExeption exception){
		ApiErro error = new ApiErro(exception.getMessage());
		return ResponseEntity.badRequest().body(error);
	}
	
	@ExceptionHandler(Throwable.class)
	public ResponseEntity<ApiErro> handlerUnexpectedBusinessException(NegociosExeption exception){
		ApiErro error = new ApiErro("Ops, ocorreu um erro inesperado.");
		return ResponseEntity.internalServerError().body(error);
	}
}
