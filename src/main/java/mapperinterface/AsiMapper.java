package mapperinterface;

import com.example.tipsy.vo.AsiVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

public interface AsiMapper {
    @Select(value = "select * from assist_customer")
    List<AsiVO> boardList();
    AsiVO boardDetail(AsiVO vo);
}
