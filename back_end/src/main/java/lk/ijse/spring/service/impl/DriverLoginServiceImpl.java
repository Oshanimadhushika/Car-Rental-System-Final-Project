package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverLoginDTO;
import lk.ijse.spring.repo.DriverLoginRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverLoginService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DriverLoginServiceImpl  implements DriverLoginService {
    @Autowired
    DriverLoginRepo driverLoginRepo;

    @Autowired
    ModelMapper modelMapper;
    @Override
    public DriverLoginDTO checkDriverLogIn(String userName) {
        return modelMapper.map(driverLoginRepo.searchDriverByUserName(userName), DriverLoginDTO.class);

    }
}
