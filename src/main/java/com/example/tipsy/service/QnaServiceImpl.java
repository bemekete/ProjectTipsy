package com.example.tipsy.service;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.model.QnaDAO;
import com.example.tipsy.vo.QnaVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class QnaServiceImpl implements QnaService{

    QnaDAO dao;

    @Override
    public QnaVO qnaDetail(QnaVO vo) {
        return null;
    }

    @Override
    public int insertQna(QnaVO vo) {
        return dao.insertQna(vo);
    }

    @Override
    public int commentQna(QnaVO vo) {
        return dao.commentQna(vo);
    }

    @Override
    public int deleteQna(QnaVO vo) {
        return dao.commentQna(vo);
    }

    @Override
    public List<QnaVO> qnaList(SearchCriteria cri) {
        return dao.qnaList(cri);
    }

    @Override
    public int criTotalCount(SearchCriteria cri) {
        return dao.criTotalCount(cri);
    }
}
