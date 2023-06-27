package com.example.tipsy.model;

import com.example.tipsy.vo.UserVO;

import java.util.List;


public interface UserDAO {

	// 회원목록
	List<UserVO> selectList();

	// 회원정보, 개인정보 보기
	UserVO getUserInfo(UserVO vo);

	// 회원정보, 개인정보 수정
	int updateUser(UserVO vo);

	// 비밀번호 수정
	int updatePw(UserVO vo);

	// 회원가임
	int joinUser(UserVO vo);

	List<String> checkId();

	// 아이디찾기
	public List<String> findId(String email);

	// 비밀번호 찾기
	public UserVO findPw(UserVO vo);

	// 찾은 아이디 메일로 보내기
	public void sendUsernames(String email, List<String> usernames);

	// 회원탈퇴
	int deleteUser(UserVO vo);
}
