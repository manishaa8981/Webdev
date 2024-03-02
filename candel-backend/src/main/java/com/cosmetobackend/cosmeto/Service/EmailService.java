package com.cosmetobackend.cosmeto.Service;

import com.cosmetobackend.cosmeto.Pojo.EmailRequest;

public interface EmailService {
    void sendCustomerConfirmationEmail(EmailRequest emailRequest);
    void resetPassword(EmailRequest emailRequest);

}
