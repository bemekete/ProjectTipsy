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

	// 상품목록
	@Override
	public List<ProVO> productList(String category) {
		return dao.productList(category);
	}

	// 상품디테일
	@Override
	public ProVO detailPro(ProVO vo) {
		return dao.detailPro(vo);
	}

	// 조회순, 등록순
	@Override
	public List<ProVO> topSort(String topSort) {
		return dao.topSort(topSort);
	}
}
