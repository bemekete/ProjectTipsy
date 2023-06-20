package com.example.tipsy.controller;

import com.example.tipsy.service.AsiService;
import com.example.tipsy.vo.AsiVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
@AllArgsConstructor
@Log4j2
public class AsiController {

    AsiService service;

    @GetMapping("/nlist")
    public ResponseEntity<List<AsiVO>> noticeList() {
        return ResponseEntity.ok(service.noticeList());
    }
    @GetMapping("/flist")
    public ResponseEntity<List<AsiVO>> faqList() {
        return ResponseEntity.ok(service.faqList());
    }

//    @GetMapping("/boarddetail")
//    public AsiVO boardDetail(AsiVO vo) {
//        vo = service.boardDetail(vo);
//        return vo;
//    }

//    @GetMapping ("/insertboard")
//    public String insertboardForm(AsiVO vo) {
//        return "/insertboard";
//    }
    @PostMapping ("/insertboard")
    public String insertboard(AsiVO vo) {
        String uri = "redirect:/faq";
        if(vo.getAsi_code() < 20){
            uri = "redirect:/notice";
        }
        
        service.insertBoard(vo);
        return uri;
    }
}
