package com.example.tipsy.service;

import com.example.tipsy.vo.UserVO;

import java.util.List;


public interface UserService {
	List<UserVO> selectList();

	int joinUser(UserVO vo);
}
