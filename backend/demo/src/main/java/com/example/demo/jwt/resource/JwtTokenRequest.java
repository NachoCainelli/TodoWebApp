package com.example.demo.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
	/*
	 * { "token":
	 * "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYzMzAxMDI5MSwiaWF0IjoxNjMyNDA1NDkxfQ.M0IScEomVjvrS9SOcOir5ZKwMBuPsk_UZSpYIady1uA23M97j6Vo_gkpgXcjXd4gIQLZPXj1aBDbd1mRNqmyPg"
	 * }
	 */

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

