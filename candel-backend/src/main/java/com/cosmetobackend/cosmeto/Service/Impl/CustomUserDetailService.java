package com.cosmetobackend.cosmeto.Service.Impl;

import com.cosmetobackend.cosmeto.Repo.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository systemUserRepo;


    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return (UserDetails) this.systemUserRepo.findByEmail(username).orElseThrow(() -> new EntityNotFoundException("User not found"));
    }
}
