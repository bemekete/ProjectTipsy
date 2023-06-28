package com.example.tipsy.criTest;

import lombok.Data;

@Data
public class SearchCriteria extends Criteria {
    private String searchType;
    private String keyword;

    private int asicode;

    private String id;
    private boolean mis;

    private int like;

    private int category;
}
