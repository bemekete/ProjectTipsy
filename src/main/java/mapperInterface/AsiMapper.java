package mapperInterface;

import com.example.tipsy.vo.AsiVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

public interface AsiMapper {
    List<AsiVO> noticeList();
    List<AsiVO> faqList();
//    AsiVO boardDetail(AsiVO vo);

    AsiVO insertBoard(AsiVO vo);
}
