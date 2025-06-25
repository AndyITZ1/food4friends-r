package com.food4friends.food4friends_backend.ingredient;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    private final IngredientRepository ingredientRepository;

    public IngredientService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public List<Ingredient> fetchAllIngredients() {
        return ingredientRepository.findAll();
    }


}
