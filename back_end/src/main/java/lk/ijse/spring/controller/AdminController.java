package lk.ijse.spring.controller;


import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @GetMapping(params = {"userName"})
    public ResponseUtil loginAdmin(@RequestParam String userName){
        AdminDTO adminDTO = adminService.checkAdminLogIn(userName);
        return new ResponseUtil("200","Login Success!",adminDTO);
    }
}
