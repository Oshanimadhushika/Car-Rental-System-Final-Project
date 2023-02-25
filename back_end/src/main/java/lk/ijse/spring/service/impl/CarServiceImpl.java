package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class CarServiceImpl implements CarService {
    public void saveCar(CarDTO carDTO) {

    }

    public void updateCar(CarDTO carDTO) {

    }

    public void deleteCar(String id) {

    }

    public CarDTO getCarDetail(String id) {
        return null;
    }

    public List<CarDTO> getAllCarDetail() {
        return null;
    }

    public List<CarDTO> getCarsUnderMaintain() {
        return null;
    }

    public List<CarDTO> getCarsNeedMaintain() {
        return null;
    }

    public List<CarDTO> getUnavailableOrAvailableCarsByStatus(String status) {
        return null;
    }

    public List<CarDTO> getAvailableAndRentalCarsForReservation(String pick_up_date, String return_date, String status) {
        return null;
    }

    public void setCarStatusUnavailableOrAvailable(String id, String status) {

    }

    public List<CarDTO> sortCarsByAttributes(CarDTO carDTO) {
        return null;
    }
}
