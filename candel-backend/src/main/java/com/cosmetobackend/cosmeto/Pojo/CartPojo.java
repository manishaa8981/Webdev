package com.cosmetobackend.cosmeto.Pojo;

import com.cosmetobackend.cosmeto.Entity.Product;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartPojo {
    private Long id;

    private Long userId;

    private Integer productId;

    @NotNull
    private Integer total_price;

    @NotNull
    private Integer quantity;
}
