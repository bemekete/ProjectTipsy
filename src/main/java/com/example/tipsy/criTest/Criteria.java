package com.example.tipsy.criTest;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Criteria {
    private int rowsPerPage; // 한 페이지에 출력할 row 개수
    private int currPage; // 현재 출력 페이지
    private int sno; // Start row 순서

    // 초기값 생성자
    public Criteria() {
        this.rowsPerPage = 10; // 한 페이지 10개씩 출력
        this.currPage = 1; // 1페이지에서 시작
    }

    // 현재 페이지
    public void setCurrPage(int currPage) {
        if(currPage>1) this.currPage = currPage;
        else this.currPage = 1;
    }

    // 한 페이지 당 row 개수 (제한조건 점검)
    public void setRowsPerPage(int rowsPerPage){
        if(rowsPerPage > 5 && rowsPerPage < 51) // 50개까지 허용
            this.rowsPerPage = rowsPerPage;
        else this.rowsPerPage = 5;
    }

    // sno 계산
    public void setSno() {
        if(this.sno < 1) this.sno = 1;
        this.sno = (this.currPage - 1)*this.rowsPerPage;
    }
}
