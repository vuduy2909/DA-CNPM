package com.capstone.wellnessnavigatorgym.dto.payment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResponseDto implements Serializable {
    private String status;
    private String message;
    private String url;
}
