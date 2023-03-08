package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity(name = "driveSchedule")
public class DriverSchedule {

    @Id
    private String scheduleId;

    private Date pickUpDate;
    private Date returnDate;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name="driverId")
    private Driver driver;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "rentalId")
    private Rental carReservation;

}
