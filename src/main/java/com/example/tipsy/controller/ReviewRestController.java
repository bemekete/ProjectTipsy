package com.example.tipsy.controller;

import com.example.tipsy.criTest.PageMaker;
import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.service.ReviewService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@AllArgsConstructor
@Log4j2
public class ReviewRestController {

    ReviewService service;

    @GetMapping("reviewlist")
    public ResponseEntity<?> reviewlist(@ModelAttribute SearchCriteria cri, PageMaker pmk) {
        cri.setSno();
        service.reviewList(cri); // 리스트화

        pmk.setCri(cri); // pageMaker에 crilist 적용
        pmk.setTotalRowsCount(service.criTotalCount(cri)); // 실제 DB row 개수 반영

        // 매핑하여 출력
        Map<String, Object> response = new HashMap<>();
        response.put("pmk", pmk);
        response.put("list", service.reviewList(cri));

        return ResponseEntity.ok(response);
    }
}
