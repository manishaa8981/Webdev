package com.cosmetobackend.cosmeto.Service;

import com.cosmetobackend.cosmeto.Pojo.AuthenticateRequest;
import com.cosmetobackend.cosmeto.Pojo.AuthenticateResponse;


public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
