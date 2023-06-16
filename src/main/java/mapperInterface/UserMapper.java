package mapperInterface;

import com.example.tipsy.vo.UserVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface UserMapper {
    @Select(value = "select * from user")
    List<UserVO> selectList();

    int joinUser(UserVO vo);

    @Select(value = "select * from user where id = #{id}")
    UserVO selectOne(UserVO vo);
}
