package com.example.tipsy.model;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.QnaVO;
import lombok.AllArgsConstructor;
import mapperInterface.QnaMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class QnaDAOImpl implements QnaDAO{

    QnaMapper mapper;

    @Override
    public QnaVO qnaDetail(QnaVO vo) {
        return null;
    }

    @Override
    public int insertQna(QnaVO vo) {
        return mapper.insertQna(vo);
    }

    @Override
    public int commentQna(QnaVO vo) {
        return mapper.commentQna(vo);
    }

    @Override
    public int deleteQna(QnaVO vo) {
        return mapper.deleteQna(vo);
    }

    @Override
    public List<QnaVO> qnaList(SearchCriteria cri) {
        return mapper.qnaList(cri);
    }

    @Override
    public int criTotalCount(SearchCriteria cri) {
        return mapper.criTotalCount(cri);
    }
}
