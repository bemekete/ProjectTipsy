package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.model.ProDAO;
import com.example.demo.vo.ProVO;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ProServiceImpl implements ProService {

	ProDAO dao;

	@Override
	public List<ProVO> productList() {
		return dao.productList();
	}

}
