package com.example.tipsy.model;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.LikeConVO;
import lombok.AllArgsConstructor;
import mapperInterface.LikeConMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class LikeConDAOImpl implements LikeConDAO {

    LikeConMapper mapper;

    @Override
    public List<LikeConVO> likeConListId(LikeConVO vo) {
        return mapper.likeConListId(vo);
    }

    @Override
    public int insertLikeCon(LikeConVO vo) {
        return mapper.insertLikeCon(vo);
    }

    @Override
    public int deleteLikeCon(LikeConVO vo) {
        return mapper.deleteLikeCon(vo);
    }

    @Override
    public List<LikeConVO> likeConList(SearchCriteria cri) {
        return mapper.likeConList(cri);
    }

    @Override
    public List<LikeConVO> currConList(SearchCriteria cri) {
        return null;
    }

    @Override
    public int criTotalCount(SearchCriteria cri) {
        return mapper.criTotalCount(cri);
    }
}
