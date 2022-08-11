package com.training.rep;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.FoodItem;


@Repository
public interface FoodItemRepo extends JpaRepository<FoodItem, Integer>{
	

}
