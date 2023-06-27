package mapperInterface;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.QnaVO;

import java.util.List;

public interface QnaMapper {
    QnaVO qnaDetail(QnaVO vo);
    int insertQna(QnaVO vo);
    int updateQna(QnaVO vo);
    int deleteQna(QnaVO vo);


    // Paging Controller 페이징
    List<QnaVO> qnaList(SearchCriteria cri);
    int criTotalCount(SearchCriteria cri);
}
