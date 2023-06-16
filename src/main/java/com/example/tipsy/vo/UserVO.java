package com.example.tipsy.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserVO {
	String id;
	String name;
	String password;
	String password_q;
	String password_a;
	String phone;
	String postal;
	String address_1;
	String address_2;
	String email;
	int point;
}
