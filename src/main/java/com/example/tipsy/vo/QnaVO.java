package com.example.tipsy.vo;

import lombok.Data;

@Data
public class QnaVO {
    private int q_seq;
    private String id;
    private int q_category;
    private String q_title;
    private String q_content;
    private String q_comment;
    private String q_regdate;
}
