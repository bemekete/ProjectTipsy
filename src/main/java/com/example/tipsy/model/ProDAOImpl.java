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

    @Override
    public List<ProVO> productList() {
        return mapper.productList();
    }

    @Override
    public ProVO detailPro(ProVO vo) {
        return mapper.detailPro(vo);
    }

    @Override
    public int insertCart(CartDto dto) {
        return mapper.insertCart(dto);
    }
}
