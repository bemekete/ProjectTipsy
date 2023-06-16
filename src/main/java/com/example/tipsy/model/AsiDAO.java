package com.example.tipsy.model;

import com.example.tipsy.vo.AsiVO;

import java.util.List;

public interface AsiDAO {
    List<AsiVO> boardList();
    AsiVO boardDetail(AsiVO vo);
}
