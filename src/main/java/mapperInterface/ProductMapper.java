package mapperInterface;

import com.example.tipsy.vo.ProVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ProductMapper {
    @Select(value = "select * from product where 제품코드ㅏ = #{ㅁㅇ}")
    List<ProVO> productList();

    @Select("select * from product where p_seq = #{p_seq}")
    ProVO detailPro(ProVO vo);
}
