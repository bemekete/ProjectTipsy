package com.example.tipsy.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AsiVO {
    private int asi_seq;
    private int asi_code;
    private String asi_title;
    private String asi_contents;
    private String asi_date;
    private int asi_cnt;
}