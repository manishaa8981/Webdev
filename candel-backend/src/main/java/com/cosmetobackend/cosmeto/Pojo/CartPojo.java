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
public class CartPojo {
    private Long id;

    private Long userId;

    private Long productId;

    @NotNull
    private Integer total_price;

    @NotNull
    private Integer quantity;
}
