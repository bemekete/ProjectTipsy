package com.example.tipsy.mapperInterface;

import com.example.tipsy.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {
	@Select(value = "select * from user")
	List<UserVO> selectList();
}
