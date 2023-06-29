package com.example.tipsy.controller;

import com.example.tipsy.dto.BasketProDto;
import com.example.tipsy.dto.CartDto;
import com.example.tipsy.service.ProService;
import com.example.tipsy.vo.ProVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
@AllArgsConstructor
@Log4j2
public class ProRestController {

	ProService service;

    //	관리자페이지 상품
    @GetMapping("/adminpro")
    public List<ProVO> adminProduct(@RequestParam("p_category") String category) {
        return service.adminProduct(category);
    }

    // 상품 등록
    @PostMapping(value = "/addProduct", consumes = "multipart/form-data")
    public int addProduct(@RequestParam("p_name") String p_name,
                          @RequestParam("p_price") Integer p_price,
                          @RequestParam("p_category") String p_category,
                          @RequestParam("p_category_detail") String p_category_detail,
                          @RequestParam("p_alc") String p_alc,
                          @RequestParam("p_sweet") String p_sweet,
                          @RequestParam("p_sour") String p_sour,
                          @RequestParam("p_stock") Integer p_stock,
                          @RequestParam("uploadfile1") MultipartFile uploadFile1,
                          @RequestParam("uploadfile2") MultipartFile uploadFile2,
                          HttpServletRequest request) throws IOException {

        ProVO vo = new ProVO();
        vo.setP_name(p_name);
        vo.setP_price(p_price);
        vo.setP_category(p_category);
        vo.setP_category_detail(p_category_detail);
        vo.setP_alc(p_alc);
        vo.setP_sweet(p_sweet);
        vo.setP_sour(p_sour);
        vo.setP_stock(p_stock);
        vo.setUploadfile1(uploadFile1);
        vo.setUploadfile2(uploadFile2);

        if (uploadFile1 != null && !uploadFile1.isEmpty()) {
            String realPath = request.getServletContext().getRealPath("/");

            if (realPath == null || realPath.isEmpty()) {
                // 인텔리제이에서 개발 중인 경우
                realPath = System.getProperty("user.dir") + "/src/main/resources/static/images/";
            } else {
                // 배포된 상황인 경우
                realPath += "resources/static/images/";
            }
            String file1 = realPath + uploadFile1.getOriginalFilename();
            uploadFile1.transferTo(new File(file1));

            // => Table 저장경로 완성 (file2)
            String file2 = "resources/static/images/" + uploadFile1.getOriginalFilename();
            vo.setP_img(file2);
        }

        if (uploadFile2 != null && !uploadFile2.isEmpty()) {
            String realPath = request.getServletContext().getRealPath("/");

            if (realPath == null || realPath.isEmpty()) {
                // 인텔리제이에서 개발 중인 경우
                realPath = System.getProperty("user.dir") + "/src/main/resources/static/images/";
            } else {
                // 배포된 상황인 경우
                realPath += "resources/static/images/";
            }
            String file3 = realPath + uploadFile2.getOriginalFilename();
            uploadFile2.transferTo(new File(file3));

            // => Table 저장경로 완성 (file2)
            String file4 = "resources/static/images/" + uploadFile2.getOriginalFilename();
            vo.setP_info_img(file4);
        }

        System.out.println(vo);

        return service.addProduct(vo);
    }




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

        System.out.println("로그인 아이디 입니다"+loginID);

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

    // 장바구니 선택 상품 삭제 기능
    @PostMapping("/deletecart")
    public int deleteCart(@RequestBody List<String> productname, HttpSession session){
        String loginID = (String) session.getAttribute("loginID");

        Map<String, Object> params = new HashMap<>();
        params.put("loginID", loginID);
        params.put("data", productname);

        return service.deleteCart(params);
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
