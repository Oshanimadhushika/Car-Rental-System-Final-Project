package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Payment {
    @Id
    private String paymentId;
    private LocalDate date;
    private double amount;
    private double damaged_cost;
    private String damagedDescription;
    private long extraMileage;
    private long costPerExtraKm;
    private String paymentStatus;

    @OneToOne
    private Rental rentalId;
}
