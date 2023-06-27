package mapperInterface;

import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.vo.ReviewVO;

import java.util.List;

public interface ReviewMapper {
    ReviewVO reviewDetail(ReviewVO vo);
    int insertReview(ReviewVO vo);
    int updateReview(ReviewVO vo);
    int deleteReview(ReviewVO vo);


    // Paging Controller 페이징
    List<ReviewVO> reviewList(SearchCriteria cri);
    int criTotalCount(SearchCriteria cri);
}
