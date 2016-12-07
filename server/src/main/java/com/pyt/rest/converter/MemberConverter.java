package com.pyt.rest.converter;

import com.pyt.model.Member;
import com.pyt.rest.dto.MemberDto;

public class MemberConverter {
	public static MemberDto from(Member entity){
		MemberDto dto = new MemberDto();
		dto.name = entity.getName();
		return dto;
	}

}