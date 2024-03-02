package com.cosmetobackend.cosmeto.Pojo;
;
import jakarta.validation.constraints.NotNull;
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
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String productDescription;

    @NotNull
    private Integer old_price;

    @NotNull
    private Integer new_price;

    private MultipartFile image;

    private Long category;


}
