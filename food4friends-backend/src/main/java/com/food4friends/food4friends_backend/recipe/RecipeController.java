package com.food4friends.food4friends_backend.recipe;

import com.food4friends.food4friends_backend.recipe.dtos.AddRecipeDTO;
import com.food4friends.food4friends_backend.recipe.dtos.InstructionDTO;
import com.food4friends.food4friends_backend.recipe.dtos.RecipeDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeService recipeService;
    private final RecipeMapper recipeMapper;

    public RecipeController(RecipeService recipeService, RecipeMapper recipeMapper) {
        this.recipeService = recipeService;
        this.recipeMapper = recipeMapper;
    }

    @GetMapping
    public ResponseEntity<List<RecipeDTO>> getAllRecipes() {
        List<Recipe> recipes = recipeService.fetchAllRecipes();
        List<RecipeDTO> recipeDTOS = new ArrayList<>();
        for (Recipe r : recipes) {
            recipeDTOS.add(recipeMapper.toDto(r));
        }
        return ResponseEntity.ok(recipeDTOS);
    }

    @PostMapping
    public ResponseEntity<RecipeDTO> createRecipe(@RequestBody AddRecipeDTO addRecipeDTO) {
        Recipe recipe = recipeService.saveRecipe(addRecipeDTO);
        return ResponseEntity.ok(recipeMapper.toDto(recipe));
    }
}
