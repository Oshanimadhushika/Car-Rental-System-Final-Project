package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.DriverLoginDTO;

import java.util.List;

public interface DriverService {

    DriverDTO checkDriverLogIn(String name, String password);

    void saveDriver(DriverDTO driverDTO);

    void UpdateDriver(DriverDTO driverDTO);

    void deleteDriver(String id);

    DriverDTO searchDriver(String id);

    List<DriverDTO> getAllDriverDetail();

    DriverLoginDTO checkDriverLogIn(String userName);


    List<DriverDTO> getTodayAvailableAndOccupiedDrivers(String status);
}
