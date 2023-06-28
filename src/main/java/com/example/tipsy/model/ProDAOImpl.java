package com.example.tipsy.model;


import com.example.tipsy.dto.BasketProDto;
import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.dto.CartDto;
import com.example.tipsy.vo.ProVO;
import lombok.AllArgsConstructor;
import mapperInterface.ProductMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class ProDAOImpl implements ProDAO {

	ProductMapper mapper;

	// 관리자페이지 상품
	@Override
	public List<ProVO> adminProduct(String category) {
		return mapper.adminProduct(category);
	}

	// 관리자페이지 상품 등록
	@Override
	public int addProduct(ProVO vo) {
		return mapper.addProduct(vo);
	}

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 상품목록
	@Override
	public List<ProVO> productList(String category) {
		return mapper.productList(category);
	}


    @Override
    public int insertCart(CartDto dto) {
        return mapper.insertCart(dto);
    }
	// 상품디테일
	@Override
	public ProVO detailPro(ProVO vo) {
		return mapper.detailPro(vo);
	}

	// 조회순, 등록순
	@Override
	public List<ProVO> topSort(String topSort) {
		return mapper.topSort(topSort);
	}


	// 검색 및 페이징

	@Override
	public List<ProVO> procriList(SearchCriteria cri) {
		return mapper.procriList(cri);
	}
	@Override
	public int criTotalCount(SearchCriteria cri) {
		return mapper.criTotalCount(cri);
	}

	// 장바구니 담긴 상품 호출
	@Override
	public List<BasketProDto> basketProduct(String id) {
		return mapper.basketProduct(id);
	}
}
