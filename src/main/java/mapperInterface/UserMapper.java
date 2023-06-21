package mapperInterface;

import com.example.tipsy.vo.UserVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface UserMapper {

    // 유저목록
    @Select(value = "select * from user")
    List<UserVO> selectList();

    // 회원가입
    int joinUser(UserVO vo);

    // 로그인
    @Select(value = "select * from user where id = #{id}")
    UserVO selectOne(UserVO vo);

    // 아이디 찾기
    public List<String> findId(String email);
}
