package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo driverRepo;

    @Autowired
    ModelMapper modelMapper;

    public DriverDTO checkDriverLogIn(String name, String password)
    {

        return null;
    }


    @Override
    public void saveDriver(DriverDTO driverDTO) {
        if(driverRepo.existsById(driverDTO.getDriverId())){
            throw new RuntimeException("This NIC Number Already Exist..!");
        }else {
            driverRepo.save(modelMapper.map(driverDTO, Driver.class));

        }

    }
    @Override
    public void UpdateDriver(DriverDTO driverDTO) {
        if (driverRepo.existsById(driverDTO.getDriverId())){
            driverRepo.save( modelMapper.map(driverDTO, Driver.class));
        }else {
            throw new RuntimeException("Driver " + driverDTO.getDriverId() + " Not Available to Update..!");
        }

    }

    @Override
    public void deleteDriver(String id) {

        if (!driverRepo.existsById(id)){
            throw new RuntimeException("Customer "+id+" Not Available To Delete.");
        }
        driverRepo.deleteById(id);
    }

    @Override
    public DriverDTO searchDriver(String id) {
        return null;
    }

    @Override
    public List<DriverDTO> getAllDriverDetail() {
        return modelMapper.map(driverRepo.findAll(),new TypeToken<List<DriverDTO>>(){}.getType());
    }

    @Override
    public List<DriverDTO> getTodayAvailableAndOccupiedDrivers(String status) {
        return null;
    }
}
