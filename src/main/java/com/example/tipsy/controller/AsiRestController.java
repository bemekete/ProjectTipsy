package com.example.tipsy.controller;

import com.example.tipsy.criTest.PageMaker;
import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.service.AsiService;
import com.example.tipsy.vo.AsiVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/asi")
@AllArgsConstructor
@Log4j2
public class AsiRestController {

    AsiService service;

    // 공지사항 전체 목록
    @GetMapping("/nlist")
    public ResponseEntity<List<AsiVO>> noticeList() {
        return ResponseEntity.ok(service.noticeList());
    }
    
    // faq 전체 목록
    @GetMapping("/flist")
    public ResponseEntity<List<AsiVO>> faqList() {
        return ResponseEntity.ok(service.faqList());
    }

    // 개별 게시글 항목
    @GetMapping("/boarddetail")
    public ResponseEntity<AsiVO> boarddetail(AsiVO vo) {
        return ResponseEntity.ok(service.boardDetail(vo));
    }

    // 게시글 등록
    // Asi_code - 10~19:Notice / 20~29:FAQ
    @PostMapping("/insertboard")
    public ResponseEntity<?> insertboard(@RequestBody AsiVO vo) {
        if(service.insertBoard(vo) > 0) {
            if(vo.getAsi_code() < 20){
                return ResponseEntity.ok().body("1"); // notice
            } else {
                return ResponseEntity.ok().body("2"); // faq
            }

        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("");
        }
    }

    // 게시글 수정 (제목 및 본문만 수정 가능)
    @PostMapping("/updateboard")
    public ResponseEntity<?> updateboard(@RequestBody AsiVO vo){
        if(service.updateBoard(vo) > 0){
            return ResponseEntity.ok().body("");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("");
        }
    }

    // 게시글 삭제
    @PostMapping("/deleteboard")
    public ResponseEntity<?> deleteboard(@RequestBody AsiVO vo){
        if(service.deleteBoard(vo) > 0){
            return ResponseEntity.ok().body("");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("");
        }
    }

    // Paging Controller 페이징
    // Board_Cri_Paging
    @GetMapping("bcrilist")
    public ResponseEntity<?> bcrilist(@ModelAttribute SearchCriteria cri, PageMaker pmk) {
        cri.setSno();
        service.bcriList(cri); // 리스트화

        pmk.setCri(cri); // pageMaker에 crilist 적용
        pmk.setTotalRowsCount(service.criTotalCount(cri)); // 실제 DB row 개수 반영

        // 매핑하여 출력
        Map<String, Object> response = new HashMap<>();
        response.put("pmk", pmk);
        response.put("list", service.bcriList(cri));

        return ResponseEntity.ok(response);
    }
}
