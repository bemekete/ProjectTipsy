package mapperInterface;

import com.example.tipsy.vo.ProVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ProductMapper {

    @Select(value = "select * from product")
    List<ProVO> productList();

    ProVO detailPro(ProVO vo);
}
