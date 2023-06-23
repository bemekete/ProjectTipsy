package mapperInterface;

import com.example.tipsy.vo.ProVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ProductMapper {
    @Select(value = "select * from product")
    List<ProVO> productList();

    @Select("select * from product where p_seq = #{p_seq}")
    ProVO detailPro(ProVO vo);

    List<ProVO> categoryList(String category);
}
