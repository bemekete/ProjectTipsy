package com.example.tipsy.model;

import com.example.tipsy.vo.UserVO;
import lombok.AllArgsConstructor;
import mapperInterface.UserMapper;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class UserDAOImpl implements UserDAO {

	UserMapper mapper;

	JavaMailSender mailSender;

	// 유저목록
	@Override
	public List<UserVO> selectList() {
		return mapper.selectList();
	}

	// 개인정보
	@Override
	public UserVO getUserInfo(UserVO vo) {
		return mapper.getUserInfo(vo);
	}

	// 회원가입
	@Override
	public int joinUser(UserVO vo) {
		return mapper.joinUser(vo);
	}

	// 아이디찾기
	@Override
	public List<String> findId(String email) {
		return mapper.findId(email);
	}
	
	@Override
	public void sendUsernames(String email, List<String> id) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setTo(email);
		simpleMailMessage.setSubject("아이디 찾기");

		StringBuffer sb = new StringBuffer();
		sb.append("가입하신 아이디는");
//		sb.append(System.lineSeparator());

		for(int i=0;i<id.size()-1;i++) {
			sb.append(id.get(i));
			sb.append(System.lineSeparator());
		}
		sb.append(id.get(id.size()-1)).append(" 입니다");

		simpleMailMessage.setText(sb.toString());


		new Thread(new Runnable() {
			public void run() {
				mailSender.send(simpleMailMessage);
			}
		}).start();
	}

}
