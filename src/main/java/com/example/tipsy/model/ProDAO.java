package com.example.tipsy.model;

import com.example.tipsy.vo.ProVO;

import java.util.List;

public interface ProDAO {

	List<ProVO> productList(String category);

	ProVO detailPro(ProVO vo);

	// 큰카테고리선택(술 종류)
	List<ProVO> categoryList(String category);

	// 인기순, 등록순
	List<ProVO> topSort(String topSort);
}
