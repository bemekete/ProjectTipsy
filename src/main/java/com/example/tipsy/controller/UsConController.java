package com.example.tipsy.controller;

import com.example.tipsy.criTest.PageMaker;
import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.service.LikeConService;
import com.example.tipsy.service.QnaService;
import com.example.tipsy.service.ReviewService;
import com.example.tipsy.vo.LikeConVO;
import com.example.tipsy.vo.QnaVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/uscon")
@AllArgsConstructor
@Log4j2
public class UsConController {

    QnaService qservice;
    ReviewService rservice;
    LikeConService lservice;

    // ====================# QnA #====================

    // QnA 목록
    @GetMapping("qnalist")
    public ResponseEntity<?> qnalist(@ModelAttribute SearchCriteria cri, PageMaker pmk) {
        cri.setSno();
        qservice.qnaList(cri); // 리스트화

        pmk.setCri(cri); // pageMaker에 crilist 적용
        pmk.setTotalRowsCount(qservice.criTotalCount(cri)); // 실제 DB row 개수 반영

        // 매핑하여 출력
        Map<String, Object> response = new HashMap<>();
        response.put("pmk", pmk);
        response.put("list", qservice.qnaList(cri));

        return ResponseEntity.ok(response);
    }

    // QnA 게시글 작성
    @PostMapping("/insertqna")
    public ResponseEntity<?> insertqna(@RequestBody QnaVO vo, HttpSession session) {
        String loginID = (String) session.getAttribute("loginID");

        if (null != loginID && loginID.length() > 0) {
            if (qservice.insertQna(vo) > 0) {
                return ResponseEntity.ok().body("1"); // 작성 완료
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("");
            }

        } else {
            return ResponseEntity.ok().body("2"); // 로그인 후 이용 안내
        }
    }

    // QnA 답변 등록
    @PostMapping("/commentqna")
    public ResponseEntity<?> commentqna(@RequestBody QnaVO vo){
        if(qservice.commentQna(vo) > 0){
            return ResponseEntity.ok().body("1");
        } else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("0");
        }
    }

    // 게시글 삭제
    @PostMapping("/deleteqna")
    public ResponseEntity<?> deleteboard(@RequestBody QnaVO vo) {
        if (qservice.deleteQna(vo) > 0) {
            return ResponseEntity.ok().body("1");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("0");
        }
    }



    // ====================# Review #====================
    // Review 목록
    @GetMapping("reviewlist")
    public ResponseEntity<?> reviewlist(@ModelAttribute SearchCriteria cri, PageMaker pmk) {
        cri.setSno();
        rservice.reviewList(cri); // 리스트화

        pmk.setCri(cri); // pageMaker에 crilist 적용
        pmk.setTotalRowsCount(rservice.criTotalCount(cri)); // 실제 DB row 개수 반영

        // 매핑하여 출력
        Map<String, Object> response = new HashMap<>();
        response.put("pmk", pmk);
        response.put("list", rservice.reviewList(cri));

        return ResponseEntity.ok(response);
    }



    // ====================# LikeCon #====================
    // 찜/최근본상품 목록 (검색, 페이징)
    @GetMapping("likeconlist")
    public ResponseEntity<?> likeconlist(@ModelAttribute SearchCriteria cri, PageMaker pmk) {
        cri.setSno();
        lservice.likeConList(cri); // 리스트화

        pmk.setCri(cri); // pageMaker에 crilist 적용
        pmk.setTotalRowsCount(lservice.criTotalCount(cri)); // 실제 DB row 개수 반영

        // 매핑하여 출력
        Map<String, Object> response = new HashMap<>();
        response.put("pmk", pmk);
        response.put("list", lservice.likeConList(cri));

        return ResponseEntity.ok(response);
    }

    // 상품 등록
    @PostMapping("/insertlikecon")
    public ResponseEntity<?> insertlikecon(@RequestBody LikeConVO vo, HttpSession session) {
        String loginID = (String) session.getAttribute("loginID");

        // 1:정상작동 / 2:미로그인 / 3:중복
        if (null != loginID && loginID.length() > 0) { // 로그인 확인
            vo.setId(loginID);

                if (lservice.insertLikeCon(vo) > 0) {
                    return ResponseEntity.ok().body("1"); // 작성 완료
                } else {
                    return ResponseEntity.ok().body("3"); // 중복 상품 안내
                }

        } else {
            return ResponseEntity.ok().body("2"); // 로그인 후 이용 안내
        }
    }

    // 상품 삭제
    @PostMapping("/deletelikecon")
    public ResponseEntity<?> deleteboard(@RequestBody LikeConVO vo) {
        if (lservice.deleteLikeCon(vo) > 0) {
            return ResponseEntity.ok().body("");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("");
        }
    }
}