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
	@Override
	public List<UserVO> selectList() {
		return dao.selectList();
	}

	@Override
	public UserVO getUserInfo(UserVO vo) {
		return dao.getUserInfo(vo);
	}

	@Override
	public int joinUser(UserVO vo) {
		return dao.joinUser(vo);
	}

	@Override
	public List<String> findId(String email) {
		return dao.findId(email);
	}

	@Override
	public void sendUsernames(String email, List<String> usernames) {
		dao.sendUsernames(email, usernames);
	}
}
