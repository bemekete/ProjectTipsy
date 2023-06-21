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
	public UserVO selectOne(UserVO vo) {
		return dao.selectOne(vo);
	}
	@Override
	public int joinUser(UserVO vo) {
		return dao.joinUser(vo);
	}

	@Override
	public List<String> checkId() {
		return dao.checkId();
	}
}
