package com.example.tipsy.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProVO {
	private int p_seq;
	private String p_name;
	private int p_price;
	private String p_category;
	private String p_category_detail;
	private String p_alc;
	private String p_sweet;
	private String p_sour;
	private String p_regdate;
	private String p_img;
	private MultipartFile uploadfile1;
	private String p_info_img;
	private MultipartFile uploadfile2;
	private int p_cnt;
	private int p_stock;

}
