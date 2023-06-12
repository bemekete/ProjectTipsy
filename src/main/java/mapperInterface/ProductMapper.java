package mapperInterface;

import com.example.tipsy.vo.ProVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ProductMapper {
    @Select("select * from product")
    List<ProVO> productList();
}
