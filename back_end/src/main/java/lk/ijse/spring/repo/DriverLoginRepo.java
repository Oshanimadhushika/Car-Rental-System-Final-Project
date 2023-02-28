package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.DriverLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverLoginRepo extends JpaRepository<DriverLogin,String> {

    DriverLogin searchDriverByUserName(String userName);

}
