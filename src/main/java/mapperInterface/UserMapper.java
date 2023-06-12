package mapperInterface;

import com.example.tipsy.vo.UserVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;


public interface UserMapper {

	@Select("select * from user")
	List<UserVO> selectList();
}
