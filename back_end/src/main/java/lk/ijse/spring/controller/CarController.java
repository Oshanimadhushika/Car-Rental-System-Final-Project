package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/car")
public class CarController {

    @Autowired
    CarService carService;

    @PostMapping
    public ResponseUtil saveCar(@RequestBody CarDTO dto){
        carService.saveCar(dto);
        return new ResponseUtil("200", "Registration Successfully....", dto);
    }

}
