package com.example.tipsy.model;

import com.example.tipsy.vo.AsiVO;

import java.util.List;

public interface AsiDAO {
    List<AsiVO> noticeList();
    List<AsiVO> faqList();
//    AsiVO boardDetail(AsiVO vo);

    AsiVO insertBoard(AsiVO vo);
}
