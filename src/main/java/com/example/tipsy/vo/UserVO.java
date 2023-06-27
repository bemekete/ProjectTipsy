package com.example.tipsy.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserVO {
	private	String id;
	private String name;
	private String password;
	private String password_q;
	private String password_a;
	private String phone;
	private String postal;
	private String address_1;
	private String address_2;
	private String email;
	private int point;
}
