package com.example.tipsy.service;

import com.example.tipsy.vo.ProVO;
import java.util.List;

public interface ProService {
	List<ProVO> productList();

	ProVO detailPro(ProVO vo);

}
