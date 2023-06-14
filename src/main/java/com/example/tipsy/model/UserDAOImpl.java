package com.example.tipsy.model;

import com.example.tipsy.vo.UserVO;
import lombok.AllArgsConstructor;
import mapperInterface.UserMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class UserDAOImpl implements UserDAO {

	UserMapper mapper;

	@Override
	public List<UserVO> selectList() {
		return mapper.selectList();
	}
}
