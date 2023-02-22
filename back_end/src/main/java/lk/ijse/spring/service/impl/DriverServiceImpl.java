package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo driverRepo;

    @Autowired
    ModelMapper modelMapper;

    public DriverDTO checkDriverLogIn(String name, String password)
    {
        return null;
    }

    public void saveDriver(DriverDTO driverDTO) {
        if(!driverRepo.existsById(driverDTO.getDriverId())){
            Driver driver = modelMapper.map(driverDTO, Driver.class);
            driverRepo.save(driver);
        }else {
            throw new RuntimeException("This NIC Number Already Exist..!");
        }

    }

    public void UpdateDriver(DriverDTO driverDTO) {

    }

    public void deleteDriver(String id) {

    }

    public DriverDTO searchDriver(String id) {
        return null;
    }

    public List<DriverDTO> getAllDriverDetail() {
        return null;
    }

    public List<DriverDTO> getTodayAvailableAndOccupiedDrivers(String status) {
        return null;
    }
}
