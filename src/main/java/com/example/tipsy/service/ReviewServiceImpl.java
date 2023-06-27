package com.example.tipsy.service;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.model.ReviewDAO;
import com.example.tipsy.vo.ReviewVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    ReviewDAO dao;

    @Override
    public ReviewVO reviewDetail(ReviewVO vo) {
        return null;
    }

    @Override
    public int insertReview(ReviewVO vo) {
        return 0;
    }

    @Override
    public int updateReview(ReviewVO vo) {
        return 0;
    }

    @Override
    public int deleteReview(ReviewVO vo) {
        return 0;
    }

    @Override
    public List<ReviewVO> reviewList(SearchCriteria cri) {
        return dao.reviewList(cri);
    }

    @Override
    public int criTotalCount(SearchCriteria cri) {
        return dao.criTotalCount(cri);
    }
}
