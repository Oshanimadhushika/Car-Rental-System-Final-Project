package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarDTO {
    private String registrationId;
    private String image3;
    private String Brand;
    private double dailyRate;
    private double monthlyRate;
    private double DamageCost;
}
