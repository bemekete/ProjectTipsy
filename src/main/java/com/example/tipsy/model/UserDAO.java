package com.example.tipsy.model;

import com.example.tipsy.vo.UserVO;

import java.util.List;


public interface UserDAO {
	List<UserVO> selectList();

	int joinUser(UserVO vo);

}
