package com.example.tipsy.controller;

import com.example.tipsy.service.UserService;
import com.example.tipsy.vo.UserVO;
import lombok.extern.log4j.Log4j2;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Log4j2
@RequestMapping("/user")
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
        return service.joinUser(vo);
    }
}
