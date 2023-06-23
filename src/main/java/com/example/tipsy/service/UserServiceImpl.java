package com.example.tipsy.service;

import com.example.tipsy.model.UserDAO;
import com.example.tipsy.vo.UserVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	UserDAO dao;

	// 유저목록
	@Override
	public List<UserVO> selectList() {
		return dao.selectList();
	}

	// 로그인, 개인정보
	@Override
	public UserVO getUserInfo(UserVO vo) {
		return dao.getUserInfo(vo);
	}

	// 회원가입
	@Override
	public int joinUser(UserVO vo) {
		return dao.joinUser(vo);
	}

	// 개인정보 수정
	@Override
	public int updateUser(UserVO vo) {
		return dao.updateUser(vo);
	}

	// 비밀번호 수정
	@Override
	public int updatePw(UserVO vo) {
		return dao.updatePw(vo);
	}

	// 아이디찾기
	@Override
	public List<String> findId(String email) {
		return dao.findId(email);
	}

	// 비밀번호 찾기
	@Override
	public UserVO findPw(UserVO vo) {
		return dao.findPw(vo);
	}

	// 찾은 아이디 이메일로 보내기
	@Override
	public void sendUsernames(String email, List<String> usernames) {
		dao.sendUsernames(email, usernames);
	}
}
