package com.example.tipsy.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProVO {
	int p_seq;
	String p_name;
	int p_price;
	String p_category;
	String p_category_detail;
	String p_alc;
	String p_sweet;
	String p_sour;
	String p_regdate;
	//	Date p_regdate;
	String p_img;
	String p_info_img;
	int p_cnt;
	int p_stock;

}
