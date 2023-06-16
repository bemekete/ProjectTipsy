package com.example.tipsy.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AsiVO {
    int asi_seq;
    int asi_code;
    String asi_title;
    String asi_contents;
    String asi_date;
    int asi_cnt;
}