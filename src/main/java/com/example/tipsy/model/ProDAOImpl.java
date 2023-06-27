package com.example.tipsy.model;


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
}
