package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.RentalRepo;
import lk.ijse.spring.service.ReservationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {
    @Autowired
    RentalRepo carReservationRepo;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    CarRepo carRepo;

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    ModelMapper mapper;


    public String generateReservationId() {
        return null;
    }

    public void requestReservation(ReservationDTO reservationDTO) {
        if (!carReservationRepo.existsById(reservationDTO.getRentalId())) {

            Rental carReservation = mapper.map(reservationDTO, Rental.class);

            Customer customer = customerRepo.findById(reservationDTO.getCustomer().getCustomerId()).get();
            Car car = carRepo.findById(reservationDTO.getCar().getRegistrationId()).get();


            carReservation.setCustomer(mapper.map(customer,Customer.class));
            carReservation.setCar(car);

            System.out.println("Driver eke ======="+reservationDTO.getDriverStatus());
            carReservationRepo.save(carReservation);

        } else {
            throw new RuntimeException("Your Reservation Request can't Send in this moment,Try Again..!");
        }

    }

    public void updateReservationStatus(String reserve_id, String driver_id, String status) {

    }

    public List<ReservationDTO> getAllPendingReservation() {
        return null;
    }

    public ReservationDTO getReservationDetail(String id) {
        return null;
    }

    public List<ReservationDTO> getAllTodayReservation() {
        return null;
    }

    public List<ReservationDTO> getAllTodayPickUps() {
        return null;
    }

    public List<ReservationDTO> getCustomerReservationByStatus(String id, String status) {
        return null;
    }
}
