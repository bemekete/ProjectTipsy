package com.example.demo.model;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.vo.ProVO;

import lombok.AllArgsConstructor;
import mapperInterface.ProductMapper;

@Repository
@AllArgsConstructor
public class ProDAOImpl implements ProDAO {

	ProductMapper mapper;

	@Override
	public List<ProVO> productList() {
		return mapper.productList();
	}

}
