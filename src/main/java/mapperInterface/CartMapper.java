package mapperInterface;

import com.example.tipsy.vo.CartVO;

import java.util.List;

public interface CartMapper {

    List<CartVO> cart(String id);
}
