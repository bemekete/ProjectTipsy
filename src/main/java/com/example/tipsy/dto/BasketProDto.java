package com.example.tipsy.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BasketProDto extends CartDto {

    String p_img;
    int p_price;
    int point;

}
