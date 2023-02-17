package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Admin {
    @Id
    private String adminId;
    private String email;
    private String userName;
    private String password;
}
