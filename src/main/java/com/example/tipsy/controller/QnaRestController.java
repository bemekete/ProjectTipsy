package com.example.tipsy.controller;

import com.example.tipsy.criTest.PageMaker;
import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.QnaVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/mypage")
@AllArgsConstructor
@Log4j2
public class UsConRestController {

    // 전체 QnA 게시글 목록
    @GetMapping("/qnalist")
    public ResponseEntity<List<QnaVO>> qnalist() {
        return ResponseEntity.ok(service.qnalist());
    }

    // 답변이 등록되지 않은 (comment = null) 게시글 목록
    @GetMapping("/qnalistin")
    public ResponseEntity<QnaVO> qnalistin(QnaVO vo) {
        return ResponseEntity.ok(service.qnalistin(vo));
    }

    // id별 게시글 목록
    @GetMapping("/qnalistid")
    public ResponseEntity<QnaVO> qnalistid(QnaVO vo) {
        return ResponseEntity.ok(service.qnalistid(vo));
    }

    // QnA 게시글 작성
    @PostMapping("/insertqnA")
    public ResponseEntity<?> insertqna(@RequestBody QnaVO vo) {
    }

    // QnA 게시글 수정 (게시글 수정, 답변 등록)
    @PostMapping("/updateqna")
    public ResponseEntity<?> updateboard(@RequestBody QnaVO vo){
    }

    // 게시글 삭제
    @PostMapping("/deleteqna")
    public ResponseEntity<?> deleteboard(@RequestBody QnaVO vo){
    }


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