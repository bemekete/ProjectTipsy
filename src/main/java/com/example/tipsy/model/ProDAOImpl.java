package com.example.tipsy.model;


import com.example.tipsy.vo.ProVO;
import lombok.AllArgsConstructor;
import mapperInterface.ProductMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class ProDAOImpl implements ProDAO {

	ProductMapper mapper;
	@Override
	public List<ProVO> productList(String category) {
		return mapper.productList(category);
	}

	@Override
	public ProVO detailPro(ProVO vo) {
		return mapper.detailPro(vo);
	}

	// 큰카테고리선택(술 종류)
	@Override
	public List<ProVO> categoryList(String category) {
		return mapper.categoryList(category);
	}

	// 조회순, 등록순
	@Override
	public List<ProVO> topSort(String topSort) {
		return mapper.topSort(topSort);
	}
}
