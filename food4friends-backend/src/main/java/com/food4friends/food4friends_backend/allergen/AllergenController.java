package com.food4friends.food4friends_backend.allergen;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/allergens")
public class AllergenController {

    private final AllergenService allergenService;

    public AllergenController(AllergenService allergenService) {
        this.allergenService = allergenService;
    }

    @GetMapping
    public ResponseEntity<List<Allergen>> getAllAllergens() {
        List<Allergen> allergens = allergenService.fetchAllAllergens();
        return ResponseEntity.ok(allergens);
    }
}
