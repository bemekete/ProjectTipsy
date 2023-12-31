package com.example.tipsy.service;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.model.AsiDAO;
import com.example.tipsy.vo.AsiVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;

@Service
@AllArgsConstructor
public class AsiServiceImpl implements AsiService {

    AsiDAO dao;

    // 기본틀
    @Override
    public List<AsiVO> noticeList() {
        return dao.noticeList();
    }
    @Override
    public List<AsiVO> faqList() {
        return dao.faqList();
    }
    @Override
    public AsiVO boardDetail(AsiVO vo) {
        return dao.boardDetail(vo);
    }
    @Override
    public int insertBoard(AsiVO vo) {
        return dao.insertBoard(vo);
    }
    @Override
    public int updateBoard(AsiVO vo) {
        return dao.updateBoard(vo);
    }
    @Override
    public int deleteBoard(AsiVO vo) {
        return dao.deleteBoard(vo);
    }


    // Paging Controller 페이징
    @Override
    public List<AsiVO> bcriList(SearchCriteria cri) {
        return dao.bcriList(cri);
    }

    @Override
    public int criTotalCount(SearchCriteria cri) {
        return dao.criTotalCount(cri);
    }
}
