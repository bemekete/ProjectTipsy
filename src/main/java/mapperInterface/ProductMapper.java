package mapperInterface;

import com.example.tipsy.dto.BasketProDto;
import com.example.tipsy.criTest.SearchCriteria;
import com.example.tipsy.dto.CartDto;
import com.example.tipsy.vo.ProVO;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

public interface ProductMapper {

    // 관리자페이지 상품
    @Select( "select * from product order by p_seq desc")
    List<ProVO> adminProduct(String category);

    // 관리자페이지 상품 등록
    int addProduct(ProVO vo);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 상품목록
    List<ProVO> productList(String category);

    // 상품 디테일
    @Select("select * from product where p_seq = #{p_seq}")
    ProVO detailPro(ProVO vo);

    // 인기순, 등록순
    List<ProVO> topSort(String topSort);

    // 장바구니 담기
    int insertCart(CartDto dto);

    // 장바구니 담긴 상품 호출
    List<BasketProDto> basketProduct(String id);

    // 장바구니 선택 삭제
    int deleteCart(Map<String,Object> productname);

    // 검색 및 페이징
    List<ProVO> procriList(SearchCriteria cri);
    int criTotalCount(SearchCriteria cri);

}
