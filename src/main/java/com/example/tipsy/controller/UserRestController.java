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

}
