package com.example.demo.model;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.vo.UserVO;

import lombok.AllArgsConstructor;
import mapperInterface.UserMapper;

@Repository
@AllArgsConstructor
public class UserDAOImpl implements UserDAO {

	UserMapper mapper;

	@Override
	public List<UserVO> selectList() {
		return mapper.selectList();
	}
}
