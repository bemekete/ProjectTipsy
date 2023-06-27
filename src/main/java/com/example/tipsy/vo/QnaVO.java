package com.example.tipsy.vo;

import lombok.Data;

@Data
public class QnaVO {
    int q_seq;
    String id;
    int q_category;
    String q_title;
    String q_content;
    String q_comment;
    String q_regdate;
}
