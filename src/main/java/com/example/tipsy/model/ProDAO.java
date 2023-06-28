package com.example.tipsy.model;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.dto.CartDto;
import com.example.tipsy.vo.ProVO;

import java.util.List;

public interface ProDAO {

	// 상품목록
	List<ProVO> productList(String category);

	
	// 상품디테일
	ProVO detailPro(ProVO vo);

	int insertCart(CartDto dto);


	// 인기순, 등록순
	List<ProVO> topSort(String topSort);


	// 검색 및 페이징
	List<ProVO> procriList(SearchCriteria cri);
	int criTotalCount(SearchCriteria cri);
}
