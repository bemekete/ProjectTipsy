package com.example.tipsy.service;

import com.example.tipsy.model.ProDAO;
import com.example.tipsy.vo.ProVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProServiceImpl implements ProService {

	ProDAO dao;

	@Override
	public List<ProVO> productList() {
		return dao.productList();
	}

	@Override
	public ProVO detailPro(ProVO vo) {
		return dao.detailPro(vo);
	}
}
