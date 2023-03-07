package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ReservationDTO {
    private String rentalId;
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "Asia/Kolkata")
    private Date date;
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "Asia/Kolkata")
    private Date pickupDate;
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "Asia/Kolkata")
    private Date returnDate;
    private double amount;
    private double total_damage_viewer_payment;
    private String pickupLocation;
    private String returnLocation;
    private String bankSlip;
    private int noOfDays;
    private String reservationStatus;
    private String driverStatus;

    private CustomerDTO customer;
    private CarDTO car;
}
