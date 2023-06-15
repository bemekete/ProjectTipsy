package com.example.tipsy.model;

import com.example.tipsy.vo.UserVO;

import java.util.List;


public interface UserDAO {
	List<UserVO> selectList();

	UserVO selectOne(UserVO vo);

}
