package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/driver")
public class DriverController {
   /* @Autowired
    private DriverService driverService;

    @PostMapping
    public ResponseUtil saveCustomer(@ModelAttribute DriverDTO dto){
        driverService.saveDriver(dto);
        return new ResponseUtil("200",dto.getDriverId()+ " Added.!",null);
    }*/
}
