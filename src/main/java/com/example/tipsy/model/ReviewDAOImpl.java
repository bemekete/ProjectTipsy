package com.example.tipsy.model;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.ReviewVO;
import lombok.AllArgsConstructor;
import mapperInterface.ReviewMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class ReviewDAOImpl implements ReviewDAO {

    ReviewMapper mapper;

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
        return mapper.reviewList(cri);
    }

    @Override
    public int criTotalCount(SearchCriteria cri) {
        return mapper.criTotalCount(cri);
    }
}
