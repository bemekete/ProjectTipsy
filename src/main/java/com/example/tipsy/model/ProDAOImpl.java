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
	public List<ProVO> productList() {
		return mapper.productList();
	}

}
