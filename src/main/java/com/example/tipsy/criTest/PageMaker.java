package com.example.tipsy.criTest;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class PageMaker {
    private int totalRowsCount; // 전체 Row 개수
    private int spageNo; // view에 표시할 첫 페이지 숫자
    private int epageNo; // view에 표시할 마지막 페이지 숫자

    private int displayPageNo = 5; // 한 페이지당 표시할 pageNo 개수
    private int lastPageNo; // 출력 가능한 마지막 페이지 no
    private boolean prev; // 이전 페이지 블록
    private boolean next; // 다음 페이지 블록

    Criteria cri;

    // 초기값
    public void setCri(Criteria cri) {
        this.cri = cri;
    }

    public void setTotalRowsCount(int totalRowsCount) {
        this.totalRowsCount = totalRowsCount;
        calcData();
    }

    public void calcData() {
        epageNo = (int)Math.ceil(cri.getCurrPage()/(double)displayPageNo)*displayPageNo;
        spageNo = (epageNo - displayPageNo) + 1;

        lastPageNo = (int)Math.ceil(totalRowsCount/(double)cri.getRowsPerPage());
        if(lastPageNo < epageNo) epageNo = lastPageNo;

        prev = spageNo == 1 ? false : true;
        next = epageNo == lastPageNo ? false : true;
    }
}
