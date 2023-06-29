package com.example.tipsy.model;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.LikeConVO;

import java.util.List;

public interface LikeConDAO {
    List<LikeConVO> likeConListId(LikeConVO vo);
    int insertLikeCon(LikeConVO vo);
    int deleteLikeCon(LikeConVO vo);


    // Paging Controller 페이징
    List<LikeConVO> likeConList(SearchCriteria cri);
    List<LikeConVO> currConList(SearchCriteria cri);
    int criTotalCount(SearchCriteria cri);
}
