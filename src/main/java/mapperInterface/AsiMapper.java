package mapperInterface;

import com.example.tipsy.vo.AsiVO;

import java.util.List;

public interface AsiMapper {
    List<AsiVO> noticeList();
    List<AsiVO> faqList();
//    AsiVO boardDetail(AsiVO vo);

    int insertBoard(AsiVO vo);
}
