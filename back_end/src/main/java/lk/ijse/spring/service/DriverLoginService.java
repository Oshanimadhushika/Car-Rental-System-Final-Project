package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverLoginDTO;

public interface DriverLoginService {

    DriverLoginDTO checkDriverLogIn(String userName);
}
