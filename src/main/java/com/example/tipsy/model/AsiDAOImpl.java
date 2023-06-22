package com.example.tipsy.model;

import com.example.tipsy.vo.AsiVO;
import lombok.AllArgsConstructor;
import mapperInterface.AsiMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class AsiDAOImpl implements AsiDAO {

    AsiMapper mapper;

    @Override
    public List<AsiVO> noticeList() {
        return mapper.noticeList();
    }

    @Override
    public List<AsiVO> faqList() {
        return mapper.faqList();
    }

    @Override
    public AsiVO boardDetail(AsiVO vo) {
        return mapper.boardDetail(vo);
    }

    @Override
    public int insertBoard(AsiVO vo) { return mapper.insertBoard(vo); }

    @Override
    public int updateBoard(AsiVO vo) { return mapper.updateBoard(vo); }

    @Override
    public int deleteBoard(AsiVO vo) { return mapper.deleteBoard(vo); }
}
