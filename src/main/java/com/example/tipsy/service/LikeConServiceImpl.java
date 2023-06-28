package com.example.tipsy.service;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.model.LikeConDAO;
import com.example.tipsy.vo.LikeConVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LikeConServiceImpl implements LikeConService{

    LikeConDAO dao;

    @Override
    public int insertLikeCon(LikeConVO vo) {
        return 0;
    }

    @Override
    public int deleteLikeCon(LikeConVO vo) {
        return 0;
    }

    @Override
    public List<LikeConVO> likeConList(SearchCriteria cri) {
        return dao.likeConList(cri);
    }

    @Override
    public List<LikeConVO> currConList(SearchCriteria cri) {
        return null;
    }

    @Override
    public int criTotalCount(SearchCriteria cri) {
        return dao.criTotalCount(cri);
    }
}
