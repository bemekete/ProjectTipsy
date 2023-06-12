package com.example.demo.model;

import java.util.List;

import com.example.demo.vo.UserVO;

public interface UserDAO {

	List<UserVO> selectList();

}
