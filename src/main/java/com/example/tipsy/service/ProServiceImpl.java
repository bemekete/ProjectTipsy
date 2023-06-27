package com.example.tipsy.service;

import com.example.tipsy.dto.CartDto;
import com.example.tipsy.model.ProDAO;
import com.example.tipsy.vo.ProVO;
import com.example.tipsy.vo.UserVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProServiceImpl implements ProService {

	ProDAO dao;

	// 관리자페이지 상품
	@Override
	public List<ProVO> adminProduct(String category) {
		return dao.adminProduct(category);
	}

	// 관리자페이지 상품 등록
	@Override
	public int addProduct(ProVO vo) {
		return dao.addProduct(vo);
	}

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

	@Override
	public int insertCart(CartDto dto) {
		return dao.insertCart(dto);
	}
}
