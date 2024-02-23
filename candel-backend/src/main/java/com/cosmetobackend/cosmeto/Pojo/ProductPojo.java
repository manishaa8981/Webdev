package com.cosmetobackend.cosmeto.Pojo;


import jakarta.persistence.JoinColumn;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jdk.jfr.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductPojo {
    private Integer id;

    @NotEmpty
    private String productName;

    @NotEmpty
    private String productDescription;

    @NotEmpty
    private Integer productPrice;

    //    @NotEmpty
    private MultipartFile productImage;

    @NotNull
    private Integer category;


}
