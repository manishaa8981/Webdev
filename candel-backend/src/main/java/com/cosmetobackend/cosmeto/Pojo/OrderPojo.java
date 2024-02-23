package com.cosmetobackend.cosmeto.Pojo;


import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderPojo {

    private Long id;

    @NotNull
    private Long userId;

    @NotNull
    private Integer productId;

    @NotNull
    private Integer salesQuantity;


}
