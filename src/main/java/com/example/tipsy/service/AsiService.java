package com.example.tipsy.service;

import com.example.tipsy.vo.AsiVO;

import java.util.List;

public interface AsiService {
    List<AsiVO> boardList();
    AsiVO boardDetail(AsiVO vo);
}
