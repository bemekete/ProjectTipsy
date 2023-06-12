package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.model.UserDAO;
import com.example.demo.vo.UserVO;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	UserDAO dao;

	@Override
	public List<UserVO> selectList() {
		return dao.selectList();
	}

}
