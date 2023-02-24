package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String  driverId;
    private String  name;
    private LocalDate dob;
    private String drivingLicenseNumber;
    private String nic;
    private String status;


}
