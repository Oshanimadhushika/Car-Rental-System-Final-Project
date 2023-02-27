package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import org.hibernate.sql.Insert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface AdminRepo extends JpaRepository<Admin,String> {


    Admin searchAdminByUserName(String userName);

}
