package com.example.tipsy.model;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.AsiVO;

import java.util.List;

public interface AsiDAO {
    // 기본틀
    List<AsiVO> noticeList();
    List<AsiVO> faqList();
    AsiVO boardDetail(AsiVO vo);
    int insertBoard(AsiVO vo);
    int updateBoard(AsiVO vo);
    int deleteBoard(AsiVO vo);


    // Paging Controller 페이징
    List<AsiVO> bcriList(SearchCriteria cri);
    int criTotalCount(SearchCriteria cri);
}
