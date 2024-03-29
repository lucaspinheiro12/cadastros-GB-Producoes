package com.gbproducao.cadastrogbp.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.gbproducao.cadastrogbp.cadastro.Pessoa;
import com.gbproducao.cadastrogbp.service.gbProducaoService;


@RestController
public class gbProducaoController extends BaseRestController {

	@Autowired
	private gbProducaoService camadaNegocios;
	
	
	@GetMapping("pessoas")
	public ResponseEntity<List<Pessoa>> findAll() {
		List<Pessoa> pessoas = camadaNegocios.findAll();
		return ResponseEntity.ok(pessoas);
	}
	
	@GetMapping("pessoas/procurar")
	public ResponseEntity <Pessoa> findAll(@RequestParam(value = "id", defaultValue = "") Integer id) {
		 Pessoa pessoa = camadaNegocios.findByid(id); 
		return ResponseEntity.ok(pessoa);
	}
	
	@PostMapping("pessoas/inserir")
	public ResponseEntity <Pessoa> insert(@RequestBody Pessoa pessoa) {
		camadaNegocios.insert(pessoa);
		return  new ResponseEntity(pessoa, HttpStatus.CREATED);
	}
	
	@PutMapping("pessoa/alterar/{id}")
	public ResponseEntity <Pessoa> update (@PathVariable Integer id, @RequestBody Pessoa pessoa) {
		camadaNegocios.update(id, pessoa);	  
		return ResponseEntity.ok(pessoa);
	}
	
	@DeleteMapping("pessoa/deletar/{id}")
	public ResponseEntity <Pessoa> delete(@PathVariable Integer id) {
		camadaNegocios.delete(id);	  
		return ResponseEntity.ok().build();
	}
	@GetMapping("pessoa/filtrar")
	public List<Pessoa> findPersonByName(@RequestParam("nome") String nome){
		List<Pessoa> pessoa =  camadaNegocios.findByNomeContains(nome);
		 return pessoa;	
	}
	
	@GetMapping("pessoa/validar")
	public List<Pessoa> findPersonByCpf(@RequestParam("cpf") String cpf){
		List<Pessoa> pessoa =  camadaNegocios.findByCpfContains(cpf);
		 return pessoa;	
	}
	
}
