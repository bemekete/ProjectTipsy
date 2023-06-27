package com.example.tipsy.service;

import com.example.tipsy.dto.CartDto;
import com.example.tipsy.vo.ProVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ProService {

	// 관리자페이지 상품
	@Select( "select * from product order by p_seq desc")
	List<ProVO> adminProduct(String category);

	// 관리자페이지 상품 등록
	int addProduct(ProVO vo);

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 상품목록
	List<ProVO> productList(String category);

	// 상품디테일
	ProVO detailPro(ProVO vo);

	// 인기순, 등록순
	List<ProVO> topSort(String topSort);
	int insertCart(CartDto dto);

}
