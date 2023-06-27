package com.example.tipsy.vo;

import lombok.Data;

@Data
public class LikeConVO {
    int like_seq;
    int cur_seq;
    String id;
    int p_seq;

    String p_name;
    String p_img;
}
