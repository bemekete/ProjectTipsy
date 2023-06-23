package com.example.tipsy.service;

import com.example.tipsy.vo.ProVO;
import java.util.List;

public interface ProService {
	List<ProVO> productList();

	ProVO detailPro(ProVO vo);

	// 큰카테고리선택(술 종류)
	List<ProVO> categoryList(String category);
}
