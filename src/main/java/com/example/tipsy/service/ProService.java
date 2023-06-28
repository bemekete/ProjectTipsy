package com.example.tipsy.service;

import com.example.tipsy.criTest.SearchCriteria;
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
	int insertCart(CartDto dto);


	// 검색 및 페이징
	List<ProVO> procriList(SearchCriteria cri);
	int criTotalCount(SearchCriteria cri);
}
