package com.gbproducao.cadastrogbp.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gbproducao.cadastrogbp.cadastro.Pessoa;
import com.gbproducao.cadastrogbp.cadastro.gbProducaoRepository;
import com.gbproducao.cadastrogbp.service.gbProducaoService;
import com.gbproducao.cadastrogbp.service.exeption.NegociosExeption;
import com.gbproducao.cadastrogbp.service.exeption.NoContentExeption;

//comunica a jpa
@Service
public class gbProducaoImpl implements gbProducaoService {

	@Autowired
	private gbProducaoRepository repository;

	@Override
	public List<Pessoa> findAll() {
		List<Pessoa> pessoa = repository.findAll();
		return pessoa;
	}
	
	@Override
	public Pessoa findByid(Integer id) {
		Optional <Pessoa> pessoa = repository.findById(id);
		return  pessoa.orElseThrow(() -> new NoContentExeption() );
	}
	

	@Override
	public void insert(Pessoa pessoa) {
		repository.save(pessoa);	
	}

	@Override
	public void update(Integer id, Pessoa pessoa) {
		Pessoa pessoadb = findByid(id);
		if(pessoadb.getCpf().equals(pessoa.getCpf())){
			repository.save(pessoa);
		}else {
			throw new NegociosExeption("Os IDs para alteração são divergentes.");
		}	
	}

	@Override
	public void delete(Integer id) {
		Pessoa pessoaDb = findByid(id);
		repository.delete(pessoaDb);
	}

	@Override
	public List<Pessoa> findByNomeContains(String nome) {
		List<Pessoa> pessoa = repository.findByNomeContains(nome);
		return pessoa;
	}
	
	@Override
	public List<Pessoa> findByCpfContains(String cpf) {
		List<Pessoa> pessoa = repository.findByCpfContains(cpf);
		return pessoa;
	}
}