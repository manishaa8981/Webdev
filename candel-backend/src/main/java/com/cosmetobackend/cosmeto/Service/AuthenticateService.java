package com.cosmetobackend.cosmeto.Service;


import com.cosmetobackend.cosmeto.Pojo.AuthenticateRequest;
import com.cosmetobackend.cosmeto.Pojo.AuthenticationResponse;

public interface AuthenticateService {

    AuthenticationResponse authenticate(AuthenticateRequest authenticateRequest);
}
