package com.food4friends.food4friends_backend.allergen;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AllergenService {

    private final AllergenRepository allergenRepository;

    public AllergenService(AllergenRepository allergenRepository) {
        this.allergenRepository = allergenRepository;
    }

    public List<Allergen> fetchAllAllergens() {
        return allergenRepository.findAll();
    }
}
