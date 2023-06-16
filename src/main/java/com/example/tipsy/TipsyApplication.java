package com.example.tipsy;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class})
@MapperScan(value = {"mapperInterface"})
public class TipsyApplication {
    public static void main(String[] args) {
        SpringApplication.run(TipsyApplication.class, args);
    }
}
