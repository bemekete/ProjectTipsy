package com.example.tipsy.vo;

import lombok.Data;

@Data
public class ReviewVO {
    int re_seq;
    int p_seq;
    String id;
    String re_regdate;
    String re_content;
    int re_score;

    String p_name;
    int p_price;
    String p_img;
}
