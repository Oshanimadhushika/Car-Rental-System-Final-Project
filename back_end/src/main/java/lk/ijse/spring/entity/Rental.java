package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Rental {
    @Id
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

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "customerId")
    private Customer customer;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "registrationId")
    private Car car;
}
