package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Rental;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String customerId;
    private String name;
    private String address;
    private String nic;
    private String drivingLicenseNumber;
    private String contactNumber;
    private String email;
    private String password;
    private String imageLocation;
    private String userName;

    private List<Rental> rentalDetail;
}
