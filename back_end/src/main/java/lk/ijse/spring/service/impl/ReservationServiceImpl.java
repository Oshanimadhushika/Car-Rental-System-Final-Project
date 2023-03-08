package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.DriverScheduleDTO;
import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.entity.*;
import lk.ijse.spring.repo.*;
import lk.ijse.spring.service.ReservationService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
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

    @Autowired
    DriverScheduleRepo driverScheduleRepo;


    public String generateReservationId() {
        return null;
    }

    public void requestReservation(ReservationDTO reservationDTO) {
        if (!carReservationRepo.existsById(reservationDTO.getRentalId())) {
            Rental carReservation = mapper.map(reservationDTO, Rental.class);

            Customer customer = customerRepo.findById(reservationDTO.getCustomer().getCustomerId()).get();
            Car car = carRepo.findById(reservationDTO.getCar().getRegistrationId()).get();


            if (reservationDTO.getDriverStatus().equalsIgnoreCase("YES")) {

                carReservation.setCustomer(mapper.map(customer,Customer.class));
                carReservation.setCar(car);


                Driver driver = driverRepo.getDriverByDriverStatus();
                if(driver!=null){
                    DriverScheduleDTO driverScheduleDTO = new DriverScheduleDTO(
                            reservationDTO.getRentalId(),
                            reservationDTO.getPickupDate(),
                            reservationDTO.getReturnDate(),
                            mapper.map(driver, DriverDTO.class),
                            mapper.map(carReservation, ReservationDTO.class));

                    driverScheduleRepo.save(mapper.map(driverScheduleDTO, DriverSchedule.class));


                    carReservation.setCustomer(mapper.map(customer,Customer.class));
                    carReservation.setCar(car);



                    carReservationRepo.save(carReservation);

                }else{
                    System.out.println("You Can't assign Driver at that movement");
                }


            }else{
                carReservation.setCustomer(mapper.map(customer,Customer.class));
                carReservation.setCar(car);
                carReservationRepo.save(carReservation);


            }

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

    @Override
    public List<ReservationDTO> getAllReservation() {
        return mapper.map(carReservationRepo.findAll(), new TypeToken<List<ReservationDTO>>() {}.getType());

    }
}
