package com.example.tipsy.service;

import com.example.tipsy.model.AsiDAO;
import com.example.tipsy.vo.AsiVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AsiServiceImpl implements AsiService {

    AsiDAO dao;

    @Override
    public List<AsiVO> noticeList() { return dao.noticeList(); }

    @Override
    public List<AsiVO> faqList() { return dao.faqList(); }

//    @Override
//    public AsiVO boardDetail(AsiVO vo) {
//        return dao.boardDetail(vo);
//    }

    @Override
    public int insertBoard(AsiVO vo) { return dao.insertBoard(vo); }
}
