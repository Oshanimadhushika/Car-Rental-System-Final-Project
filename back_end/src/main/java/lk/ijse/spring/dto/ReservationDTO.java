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
public class ReservationDTO {
    private String rentalId;
    private LocalDate date;
    private LocalDate pickupDate;
    private LocalDate returnDate;
    private double amount;
    private double total_damage_viewer_payment;
    private String pickupLocation;
    private String returnLocation;
    private String bankSlip;
    private String noOfDays;
    private String reservationStatus;
    private String driverStatus;

    private CustomerDTO customer;
    private CarDTO car;
}
