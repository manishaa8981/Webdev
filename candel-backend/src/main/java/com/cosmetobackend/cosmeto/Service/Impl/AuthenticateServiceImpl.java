package com.cosmetobackend.cosmeto.Service.Impl;
import com.cosmetobackend.cosmeto.Entity.User;
import com.cosmetobackend.cosmeto.Pojo.AuthenticateRequest;
import com.cosmetobackend.cosmeto.Pojo.AuthenticationResponse;
import com.cosmetobackend.cosmeto.Repo.UserRepository;
import com.cosmetobackend.cosmeto.Service.AuthenticateService;
import com.cosmetobackend.cosmeto.security.JwtService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticateServiceImpl implements AuthenticateService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Override
    public AuthenticationResponse authenticate(AuthenticateRequest authenticateRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticateRequest.getEmail(), authenticateRequest.getPassword()
                )
        );

        User user =userRepository.findByEmail(authenticateRequest.getEmail())
                .orElseThrow(() -> new EntityNotFoundException("User not found."));

        UserDetails userDetails = user;

        String jwtToken = jwtService.generateToken(userDetails);
        return AuthenticationResponse.builder().token(jwtToken).id(user.getId()).build();
    }
}

