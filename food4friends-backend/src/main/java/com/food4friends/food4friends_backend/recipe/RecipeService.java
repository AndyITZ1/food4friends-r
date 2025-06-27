package com.food4friends.food4friends_backend.recipe;

import com.food4friends.food4friends_backend.recipe.dtos.AddRecipeDTO;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final InstructionRepository instructionRepository;

    public RecipeService(RecipeRepository recipeRepository, InstructionRepository instructionRepository) {
        this.recipeRepository = recipeRepository;
        this.instructionRepository = instructionRepository;
    }

    public List<Recipe> fetchAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe saveRecipe(AddRecipeDTO addRecipeDTO) {
        Recipe recipe = new Recipe(addRecipeDTO.title(), addRecipeDTO.imageUrl(), addRecipeDTO.prepTime(), addRecipeDTO.cookTime(), addRecipeDTO.servings(), addRecipeDTO.notes());
        for (int i = 1; i <= addRecipeDTO.instructions().size(); i++) {
            Instruction instruction = new Instruction(i, addRecipeDTO.instructions().get(i - 1).instruction(), addRecipeDTO.instructions().get(i - 1).notes());
            recipe.addInstruction(instruction);
        }
        return recipeRepository.save(recipe);
    }
}
