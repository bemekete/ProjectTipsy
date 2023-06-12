package com.example.tipsy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class})
public class TipsyApplication {

    public static void main(String[] args) {
        SpringApplication.run(TipsyApplication.class, args);
    }
}
