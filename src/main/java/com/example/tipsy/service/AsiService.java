package com.example.tipsy.service;

import com.example.tipsy.vo.AsiVO;

import java.util.List;

public interface AsiService {
    List<AsiVO> noticeList();
    List<AsiVO> faqList();
//    AsiVO boardDetail(AsiVO vo);

    int insertBoard(AsiVO vo);
}
