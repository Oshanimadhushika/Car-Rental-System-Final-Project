package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.DriverLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverRepo extends JpaRepository<Driver,String> {

    @Query(value = "SELECT * FROM driver WHERE status='Available' ORDER BY driverId DESC limit 1", nativeQuery = true)
    Driver getDriverByDriverStatus();

}
