package com.gbproducao.cadastrogbp.cadastro;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface gbProducaoRepository extends JpaRepository<Pessoa, Integer>{
	List<Pessoa> findByNomeContains(String nome);
	List<Pessoa> findByCpfContains(String cpf);
	Pessoa findByCpf(String cpf);
}
