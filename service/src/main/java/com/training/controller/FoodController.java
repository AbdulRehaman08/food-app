package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.FoodItem;
import com.training.FoodItemService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class FoodController {

	
	
	 @Autowired
	 FoodItemService service;
	 @GetMapping("/getmenu")
	 public List<FoodItem> getmenu(){
		return service.getFoodItems();
	
	}
}
