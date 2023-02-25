package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Car {
    @Id
    private String registrationId;
    private String Brand;
    private String type;
    private String model;
    private String fuelType;
    private String transmissionType;
    private String color;
    private int noOfPassenger;
    private String image1;
    private String image2;
    private String image3;
    private String image4;
    private long lastServiceMileage;
    private long freeServiceMileage;
    private double dailyRate;
    private double monthlyRate;
    private double priceForExtraKm;
    private String availability;
    private double DamageCost;
}
