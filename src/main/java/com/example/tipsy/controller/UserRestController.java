package com.example.tipsy.controller;

import com.example.tipsy.service.UserService;
import com.example.tipsy.vo.UserVO;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
@Log4j2
public class UserRestController {
    UserService service;

    private final PasswordEncoder passwordEncoder;

    // 유저 목록 불러오기
    @GetMapping("/userlist")
    public List<UserVO> selectList(Model model) {
        model.addAttribute("banana", service.selectList());
        log.info(model);

        return service.selectList();
    }

    // 개인정보
    @GetMapping("/userinfo")
    public UserVO getUserInfo(UserVO vo, HttpSession session){
        if ( vo.getId()==null || vo.getId().length()<1 ) {
            vo.setId((String)session.getAttribute("loginID")) ;
            vo = service.getUserInfo(vo);
        }
        return vo;
    }

    // 회원가입
    @PostMapping("/join")
    public int joinUser(@RequestBody UserVO vo){
        String password = vo.getPassword();
        String encoder = passwordEncoder.encode(password);
        vo.setPassword(encoder);

        return service.joinUser(vo);
    }

    // 회원가입 - 아이디 중복 체크
    @GetMapping("/checkid")
    public List<String> checkId(){
       return service.checkId();
    }
    
    // 로그인
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserVO vo,  HttpSession session, Model model){

        String userPw = vo.getPassword();
        vo = service.getUserInfo(vo);

        if ( vo!=null) {
            if ( passwordEncoder.matches(userPw, vo.getPassword()) ) {

                session.setAttribute("loginID",vo.getId());
                session.setAttribute("loginName",vo.getName());

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

    // 로그인 세션(서버에서 관리)
    // 체크해서 react state값 유지
    @GetMapping("/check-login")
    public ResponseEntity<?> checkLogin(HttpSession session) {
        boolean isLoggedIn = session.getAttribute("loginID") != null;
        return ResponseEntity.ok().body(Map.of("isLoggedIn", isLoggedIn));
    }

    // 로그아웃
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

    // 아이디찾기
    @GetMapping("/findId")
    public ResponseEntity<Object> sendEmail(@RequestParam("email") String email){
        List<String> usernames =service.findId(email);
        if(usernames.size() != 0) {
            service.sendUsernames(email, usernames);
            return new ResponseEntity<Object>(HttpStatus.OK);
        }
        return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
    }

    // 비밀번호 찾기
    @PostMapping("/findPw")
    public UserVO findPassword(@RequestBody UserVO vo, HttpSession session) {
        vo = service.findPw(vo);
        if (vo != null) {
            session.setAttribute("loginID",vo.getId());
            System.out.println(vo);
            System.out.println(session.getAttribute("loginID"));
            return vo;
        } else {
            System.out.println(vo);
            return null;
        }
    }

    // 개인정보 수정
    @PostMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody UserVO vo, HttpSession session) {
        vo.setPassword(null);
        if (service.updateUser(vo) > 0) {
            session.setAttribute("loginName", vo.getName());
            return ResponseEntity.ok("개인정보 수정 성공");
        } else {
            return ResponseEntity.badRequest().body("개인정보 수정 실패");
        }
    }
    
    // 비밀번호 수정
    @PostMapping("/updatepw")
    public ResponseEntity<String> updatePw(@RequestBody UserVO vo, HttpServletRequest request) {
        String id = (String) request.getSession().getAttribute("loginID");
        vo.setId(id);
        vo.setPassword(passwordEncoder.encode(vo.getPassword()));

        if (service.updateUser(vo) > 0) {
            request.getSession().invalidate();

            String loginID = (String) request.getSession().getAttribute("loginID");
            String loginName = (String) request.getSession().getAttribute("loginName");
            System.out.println("로그인 성공. 아이디: " + loginID + ", 이름: " + loginName);

            return ResponseEntity.ok("비밀번호 수정 성공");
        } else {
            return ResponseEntity.badRequest().body("비밀번호 수정 실패");
        }
    }

    // 회원탈퇴
    @GetMapping("/delete")
    public ResponseEntity<String> deleteUser(UserVO vo, HttpServletRequest request) {
        vo.setId((String) request.getSession().getAttribute("loginID"));
        if (service.deleteUser(vo) > 0) {
            System.out.println("delete!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            request.getSession().invalidate();
            return ResponseEntity.ok("회원탈퇴 성공");
        } else {
            return ResponseEntity.badRequest().body("회원탈퇴 실패");
        }
    }
}