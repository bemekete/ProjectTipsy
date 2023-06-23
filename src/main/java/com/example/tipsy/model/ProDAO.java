package com.example.tipsy.model;

import com.example.tipsy.vo.ProVO;

import java.util.List;

public interface ProDAO {

	List<ProVO> productList();

	ProVO detailPro(ProVO vo);

	// 큰카테고리선택(술 종류)
	List<ProVO> categoryList(String category);
}
