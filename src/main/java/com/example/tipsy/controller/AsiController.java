package com.example.tipsy.controller;

import com.example.tipsy.service.AsiService;
import com.example.tipsy.vo.AsiVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@AllArgsConstructor
@Log4j2
public class AsiController {

    AsiService service;

    @GetMapping("/boardlist")
    public List<AsiVO> boardList() {
        return service.boardList();
    }

    @GetMapping("/boarddetail")
    public AsiVO boardDetail(AsiVO vo) {
        vo = service.boardDetail(vo);
        return vo;
    }
}
