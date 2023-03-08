package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverScheduleDTO {
    private String  scheduleId;

    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "Asia/Kolkata")
    private Date pickUpDate;
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "Asia/Kolkata")
    private Date returnDate;

    private DriverDTO driver;

    public DriverScheduleDTO(Date pickUpDate, Date returnDate, DriverDTO driver, ReservationDTO carReservation) {
        this.pickUpDate = pickUpDate;
        this.returnDate = returnDate;
        this.driver = driver;
        this.carReservation = carReservation;
    }

    private ReservationDTO carReservation;


    /*public <D> DriverScheduleDTO(Date pickupDate, Date returnDate, D map, D map1) {
    }*/
}
