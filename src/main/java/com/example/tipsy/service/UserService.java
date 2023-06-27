package com.example.tipsy.service;

import com.example.tipsy.vo.UserVO;

import java.util.List;

public interface UserService {
	
	// 유저목록
	List<UserVO> selectList();

	// 로그인, 개인정보
	UserVO getUserInfo(UserVO vo);

	// 회원가입
	int joinUser(UserVO vo);

	// 회원정보, 개인정보 수정
	int updateUser(UserVO vo);

	// 비밀번호 수정
	int updatePw(UserVO vo);
	
	// 아이디찾기
	public List<String> findId(String email);

	// 비밀번호 찾기
	public UserVO findPw(UserVO vo);

	// 찾은 아이디 이메일로 보내기
	public void sendUsernames(String email, List<String> usernames);

	// 아이디 중복확인
	List<String> checkId();

	// 회원탈퇴
	int deleteUser(UserVO vo);
}
