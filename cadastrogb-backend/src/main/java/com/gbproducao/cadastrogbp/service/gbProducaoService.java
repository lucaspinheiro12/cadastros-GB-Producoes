package com.gbproducao.cadastrogbp.service;

import java.util.List;

import com.gbproducao.cadastrogbp.cadastro.Pessoa;


public interface gbProducaoService {
	//service joga pro repositorio 
	List<Pessoa> findAll();
		
		Pessoa findByid(Integer id);
		void insert (Pessoa pessoa);
		
		void update (Integer id, Pessoa pessoa);
		
		void delete (Integer id);

		List<Pessoa> findByNomeContains(String nome);
		List<Pessoa> findByCpfContains(String cpf);

}
