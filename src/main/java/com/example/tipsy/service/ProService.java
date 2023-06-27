package com.example.tipsy.service;

import com.example.tipsy.dto.BasketProDto;
import com.example.tipsy.dto.CartDto;
import com.example.tipsy.vo.ProVO;

import java.util.List;

public interface ProService {

	// 상품목록
	List<ProVO> productList(String category);

	// 상품디테일
	ProVO detailPro(ProVO vo);

	// 인기순, 등록순
	List<ProVO> topSort(String topSort);

	// 장바구니 담기
	int insertCart(CartDto dto);


	// 장바구니 담긴 상품 호출
	List<BasketProDto> basketProduct(String id);

}
