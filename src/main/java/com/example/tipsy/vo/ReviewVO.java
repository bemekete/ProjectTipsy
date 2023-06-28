package com.example.tipsy.vo;

import lombok.Data;

@Data
public class ReviewVO {
    private int re_seq;
    private int p_seq;
    private String id;
    private String re_regdate;
    private String re_content;
    private int re_score;
    private String p_name;
    private int p_price;
    private String p_img;
}
