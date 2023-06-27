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
	public List<ProVO> productList(String category) {
		return dao.productList(category);
	}

	@Override
	public ProVO detailPro(ProVO vo) {
		return dao.detailPro(vo);
	}

	// 큰카테고리선택(술 종류)
	@Override
	public List<ProVO> categoryList(String category) {
		return dao.categoryList(category);
	}

	// 조회순, 등록순
	@Override
	public List<ProVO> topSort(String topSort) {
		return dao.topSort(topSort);
	}
}
