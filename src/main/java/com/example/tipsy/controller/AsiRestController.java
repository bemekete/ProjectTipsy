package com.example.tipsy.controller;

import com.example.tipsy.service.AsiService;
import com.example.tipsy.vo.AsiVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Log4j2
public class AsiRestController {

    AsiService service;

    @GetMapping("/nlist")
    public ResponseEntity<List<AsiVO>> noticeList(Model model) {
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

    @PostMapping("/insertboard")
    public ResponseEntity<?> insertboard(@RequestBody AsiVO vo) {
        if(service.insertBoard(vo) > 0) {
            if(vo.getAsi_code() < 20){
                return ResponseEntity.ok().body("1");
            } else {
                return ResponseEntity.ok().body("2");
            }

        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("");
        }
    }

}
