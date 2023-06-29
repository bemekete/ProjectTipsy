package com.example.tipsy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    // 비밀번호 암호화
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    // Security 구성전 세팅(기본 로그인 화면 비활성화)
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .cors().disable() // CORS(Cross-Origin Resource Sharing) 비활성화
                .csrf().disable() // CSRF(Cross-Site Request Forgery) 비활성화
                .formLogin().disable() // 기본 로그인 폼 비활성화
                .logout().logoutSuccessUrl("/") // 로그아웃 설정 및 로그아웃 성공 시 이동할 URL 설정
                .and()
                .httpBasic() // HTTP 기본 인증 활성화
                .and().build();
    }
}