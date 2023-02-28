package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.DriverLoginDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/driver")
public class DriverController {
    @Autowired
    private DriverService driverService;

    @PostMapping
    public ResponseUtil saveDriver(@RequestBody DriverDTO dto){
        driverService.saveDriver(dto);
        return new ResponseUtil("200",dto.getDriverId()+ "Driver Added.!",dto);
    }

    @PutMapping()
    public ResponseUtil UpdateDriver(@RequestBody DriverDTO dto){
        driverService.UpdateDriver(dto);
        return new ResponseUtil("200",dto.getDriverId()+":Driver Updated.!",null);
    }

    @DeleteMapping(params = {"driverId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String driverId){
        driverService.deleteDriver(driverId);
        return new ResponseUtil("200",driverId+" :Driver Deleted.!",null);
    }

    @GetMapping
    public ResponseUtil getAllCustomer(){
        List<DriverDTO> allDrivers = driverService.getAllDriverDetail();
        return new ResponseUtil("200"," Success.!",allDrivers);
    }


}
