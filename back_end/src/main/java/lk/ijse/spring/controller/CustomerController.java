package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public String get(){
        System.out.println("Yeeeee");
        return "oshiiiii";
    }

    @PostMapping
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO dto){
        customerService.saveCustomer(dto);
        return new ResponseUtil("200",dto.getCustomerId()+ " Added.!",null);
    }

   /* @PostMapping
    public String post(){
        System.out.println("Post Mapping");
        return "girl";
    }

    @DeleteMapping
    public String delete(){
        System.out.println("Delete");
        return "Deleteeee";
    }

    @PutMapping
    public String put(){
        System.out.println("Put");
        return "putttttt";
    }

    @PostMapping
    public String postone(String id,String name){
        return id+""+name;
    }*/
}
