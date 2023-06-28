package com.example.tipsy.service;

import com.example.tipsy.dto.BasketProDto;
import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.dto.CartDto;
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

	@Override
	public int insertCart(CartDto dto) {
		return dao.insertCart(dto);
	}


	// 검색 및 페이징

	@Override
	public List<ProVO> procriList(SearchCriteria cri) {
		return dao.procriList(cri);
	}

	@Override
	public int criTotalCount(SearchCriteria cri) {
		return dao.criTotalCount(cri);
	}
    // 장바구니 담기
    @Override
    public int insertCart(CartDto dto) {
        return dao.insertCart(dto);
    }

    // 장바구니 담긴 상품 호출
    @Override
    public List<BasketProDto> basketProduct(String id) {
        return dao.basketProduct(id);
    }
}
