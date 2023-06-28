package com.example.tipsy.controller;

import com.example.tipsy.criTest.PageMaker;
import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.dto.BasketProDto;
import com.example.tipsy.dto.CartDto;
import com.example.tipsy.service.ProService;
import com.example.tipsy.vo.ProVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
@AllArgsConstructor
@Log4j2
public class ProRestController {

    ProService service;

    //	상품 목록
    @GetMapping("/selectpro")
    public List<ProVO> selectPro(@RequestParam("p_category") String category) {
        System.out.println(service.productList(category));
        return service.productList(category);
    }

    //	상품 상세(디테일)
    @GetMapping("/detailpro")
    public ProVO detailPro(ProVO vo) {
        vo = service.detailPro(vo);
        return vo;
    }

    // 장바구니 담기 기능
    @PostMapping("/addcart")
    public int addCart(@RequestBody CartDto dto, HttpSession session) {
        String loginID = (String) session.getAttribute("loginID");

        if (null != loginID && loginID.length() > 0) {
            dto.setId(loginID);
            System.out.println(service.insertCart(dto));
            return service.insertCart(dto);
        } else {
            return 0;
        }
    }

    // 장바구니에 담은 상품 호출
    @GetMapping("/basketproduct")
    public ResponseEntity<List<BasketProDto>> basketProduct(HttpSession session) {
        String loginID = (String) session.getAttribute("loginID");

        if (null != loginID && loginID.length() > 0) {
            List<BasketProDto> result = service.basketProduct(loginID);
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/topsort")
    public List<ProVO> topSort(@RequestParam("topSort") String topSort) {
        String sort = "1";
        if ("조회순".equals(topSort)) {
            sort = "1";
        } else if ("등록순".equals(topSort)) {
            sort = "2";
        }
        return service.topSort(sort);
    }
}
