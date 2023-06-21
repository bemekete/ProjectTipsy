package com.example.tipsy.model;

import com.example.tipsy.vo.UserVO;

import java.util.List;


public interface UserDAO {

	List<UserVO> selectList();

	UserVO selectOne(UserVO vo);

	int joinUser(UserVO vo);

	public List<String> findId(String email);

	public void sendUsernames(String email, List<String> usernames);

}
