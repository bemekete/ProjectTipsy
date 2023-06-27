package com.example.tipsy.controller;

import com.example.tipsy.dto.CartDto;
import com.example.tipsy.service.ProService;
import com.example.tipsy.vo.ProVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.List;

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
    @PostMapping("/addProduct")
    public int addProduct(@RequestBody ProVO vo , HttpServletRequest request) throws IOException {
        MultipartFile uploadFile = vo.getMultipartFile();
            if (uploadFile != null && !uploadFile.isEmpty()) {
                String realPath = request.getServletContext().getRealPath("/");

                if (realPath == null || realPath.isEmpty()) {
                    // 인텔리제이에서 개발 중인 경우
                    realPath = System.getProperty("user.dir") + "/src/main/resources/static/images/";
                } else {
                    // 배포된 상황인 경우
                    realPath += "resources/static/images/";
                }
            String file1 = realPath + uploadFile.getOriginalFilename(); //저장경로 완성
            uploadFile.transferTo(new File(file1));  // IO 발생: Checked Exception 처리

            // => Table 저장경로 완성 (file2)
            String file2="resources/static/images/" + uploadFile.getOriginalFilename();
            vo.setP_img(file2);
        }
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

    // 장바구니 관련 호출
    @PostMapping("/addcart")
    public int addCart(@RequestBody CartDto dto, HttpSession session) {
        String loginID = (String) session.getAttribute("loginID");

        if (null != loginID && loginID.length()>0) {
            dto.setId(loginID);
            System.out.println(service.insertCart(dto));
            return service.insertCart(dto);
        } else {
            return 0;
        }
    }

	@GetMapping("/topsort")
	public List<ProVO> topSort(@RequestParam("topSort") String topSort){
		String sort = "1";
		if ("조회순".equals(topSort)){
			sort = "1";
		} else if ("등록순".equals(topSort)) {
			sort = "2";
		}
		return service.topSort(sort);
	}
}
