package mapperInterface;

import com.example.tipsy.vo.UserVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface UserMapper {

    // 유저목록
    @Select(value = "select * from user")
    List<UserVO> selectList();

    // 로그인, 개인정보
    UserVO getUserInfo(UserVO vo);

    // 회원가입
    int joinUser(UserVO vo);

    @Select(value = "select * from user where id = #{id}")
    UserVO selectOne(UserVO vo);

    @Select("select id from user")
    List<String> checkId();
    // 아이디 찾기
    public List<String> findId(String email);

    // 비밀번호 찾기
    public UserVO findPw(UserVO vo);

    // 개인정보 수정
    int updateUser(UserVO vo);

    // 비밀번호 수정
    int updatePw(UserVO vo);
}
