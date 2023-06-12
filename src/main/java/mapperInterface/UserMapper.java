package mapperInterface;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.example.demo.vo.UserVO;

public interface UserMapper {

	@Select("select * from user")
	List<UserVO> selectList();
}
