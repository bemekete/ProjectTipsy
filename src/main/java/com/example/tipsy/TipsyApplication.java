package com.example.tipsy;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
@MapperScan(value = {"mapperInterface"})
public class TipsyApplication {
    public static void main(String[] args) {
        SpringApplication.run(TipsyApplication.class, args);

        System.out.println("스프링부트 시작");
    }
}
