package com.example.tipsy.controller;

import com.example.tipsy.service.UserService;
import com.example.tipsy.vo.UserVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
@Log4j2
public class UserRestController {
    UserService service;

    @GetMapping("/userlist")
    public List<UserVO> selectList(Model model) {
        model.addAttribute("banana", service.selectList());
        log.info(model);

        return service.selectList();
    }

    @PostMapping("/join")
    public int joinUser(@RequestParam UserVO vo){
        return 0;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserVO vo, HttpServletRequest request, Model model){

        String userPw = vo.getPassword();
        vo = service.selectOne(vo);

        if ( vo!=null) {
            if ( vo.getPassword().equals(userPw) ) {
                request.getSession().setAttribute("loginID",vo.getId());
                request.getSession().setAttribute("loginName",vo.getName());

                // 로그 확인
                System.out.println(vo.getId());
                System.out.println(vo.getPassword());
                System.out.println(vo.getEmail());
                System.out.println(vo.getPoint());
                System.out.println(vo.getPhone());



                return ResponseEntity.ok("로그인성공");
            }else {
                // => password 오류
                model.addAttribute("message", "비밀번호 틀림");
            } //if_내부
        } else {
            // ** id 오류
            model.addAttribute("message", "아이디 틀림");
        } //if_외부
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인실패");
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        // 세션 초기화
        request.getSession().invalidate();

        String loginID = (String) request.getSession().getAttribute("loginID");
        String loginName = (String) request.getSession().getAttribute("loginName");

        // 로그 확인
        System.out.println("로그인 성공. 아이디: " + loginID + ", 이름: " + loginName);

        return ResponseEntity.ok("로그아웃 성공");
    }
}
