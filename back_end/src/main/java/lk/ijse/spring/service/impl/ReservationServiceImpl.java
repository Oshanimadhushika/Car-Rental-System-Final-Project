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
            if (true) {

                Rental carReservation = mapper.map(reservationDTO, Rental.class);

                /*Customer customer = customerRepo.findById(reservationDTO.getCustomer().getNic()).get();*/
                /* Car car = carRepo.findById(reservationDTO.getCar().getRegistrationId()).get();*/

                Customer customer = new Customer();
                Car car = new Car();

                carReservation.setCustomer(customer);
                carReservation.setCar(car);

                if (reservationDTO.getDriverStatus().equalsIgnoreCase("YES")) {

                /*Driver driver = driverRepo.selectDriverForReservation(
                        reservationDTO.getPick_up_date(),
                        reservationDTO.getReturn_date());

                DriverScheduleDTO driverScheduleDTO = new DriverScheduleDTO(
                        reservationDTO.getPick_up_time(),
                        reservationDTO.getPick_up_date(),
                        reservationDTO.getReturn_date(),
                        mapper.map(driver, DriverDTO.class),
                        mapper.map(carReservation, ReservationDTO.class));

                driverScheduleRepo.save(mapper.map(driverScheduleDTO, DriverSchedule.class));*/

                } else {
                    carReservationRepo.save(carReservation);
                }
            } else {
                throw new RuntimeException("Your Reservation Request can't Send in this moment,Try Again..!");
            }
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
