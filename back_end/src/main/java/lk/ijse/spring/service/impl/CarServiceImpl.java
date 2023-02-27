package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCar(CarDTO carDTO) {
        if (carRepo.existsById(carDTO.getRegistrationId())){
            throw new RuntimeException("Car "+carDTO.getRegistrationId()+"Already Exists");
        }
        carRepo.save(mapper.map(carDTO, Car.class));

    }

    @Override
    public void updateCar(CarDTO carDTO) {

        if (carRepo.existsById(carDTO.getRegistrationId())){
            carRepo.save(mapper.map(carDTO, Car.class));
        }else {
            throw new RuntimeException("Car " + carDTO.getRegistrationId() + " Not Available to Update..!");
        }
    }

    @Override
    public void deleteCar(String id) {

    }

    @Override
    public CarDTO getCarDetail(String id) {
      /*  if (carRepo.existsById(id)) {
            return mapper.map(carRepo.findById(id).get(), CarDTO.class);
        } else {
            throw new RuntimeException("Can't Get Details.!");
        }*/
        return null;
    }

    @Override
    public ArrayList<CarDTO> getAllCarDetail() {
            return mapper.map(carRepo.findAll(), new TypeToken<List<CarDTO>>() {
            }.getType());
        }

   /* @Override
    public void uploadCarImages(String frontPath, String backPath, String sidePath, String interiorPath, String registrationNum) {
        if (repo.existsById(registrationNum)) {
            repo.updateCarFilePaths(frontPath, backPath, sidePath,interiorPath, registrationNum);
        } else {
            throw new RuntimeException("User Not Found");
        }
    }*/


    @Override
    public List<CarDTO> getCarsUnderMaintain() {
        return null;
    }

    @Override
    public List<CarDTO> getCarsNeedMaintain() {
        return null;
    }

    @Override
    public List<CarDTO> getUnavailableOrAvailableCarsByStatus(String status) {
        return null;
    }

    @Override
    public List<CarDTO> getAvailableAndRentalCarsForReservation(String pick_up_date, String return_date, String status) {
        return null;
    }

    @Override
    public void setCarStatusUnavailableOrAvailable(String id, String status) {

    }

    @Override
    public List<CarDTO> sortCarsByAttributes(CarDTO carDTO) {
        return null;
    }

    @Override
    public void uploadCarImage(String frontPath, String BackPath, String sidePath, String InteriorPath, String registrationNumber) {

        if (carRepo.existsById(registrationNumber)) {

            carRepo.updateCarFilePaths(frontPath, BackPath, sidePath,InteriorPath, registrationNumber);
        } else {
            throw new RuntimeException("User Not Found");
        }
    }

    @Override
    public CarDTO searchCarByRegistrationId(String registrationId) {
        return mapper.map( carRepo.getCarByRegistrationId(registrationId),CarDTO.class);
    }
}
