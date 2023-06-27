package com.example.tipsy.service;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.ReviewVO;

import java.util.List;

public interface ReviewService {
    ReviewVO reviewDetail(ReviewVO vo);
    int insertReview(ReviewVO vo);
    int updateReview(ReviewVO vo);
    int deleteReview(ReviewVO vo);


    // Paging Controller 페이징
    List<ReviewVO> reviewList(SearchCriteria cri);
    int criTotalCount(SearchCriteria cri);
}
