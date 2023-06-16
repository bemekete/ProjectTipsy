package mapperInterface;

import com.example.tipsy.vo.AsiVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface AsiMapper {
    @Select(value = "select * from assist_customer")
    List<AsiVO> boardList();

    AsiVO boardDetail(AsiVO vo);
}
