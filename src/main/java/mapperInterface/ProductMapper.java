package mapperInterface;

import com.example.tipsy.vo.ProVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ProductMapper {

    // 상품목록
    List<ProVO> productList(String category);

    // 상품 디테일
    @Select("select * from product where p_seq = #{p_seq}")
    ProVO detailPro(ProVO vo);

    // 인기순, 등록순
    List<ProVO> topSort(String topSort);
}
