require 'test_helper'

class DrinksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @drink = drinks(:one)
  end

  test "should get index" do
    get drinks_url, as: :json
    assert_response :success
  end

  test "should create drink" do
    assert_difference('Drink.count') do
      post drinks_url, params: { drink: { strCategory: @drink.strCategory, strDrink: @drink.strDrink, strDrinkThumb: @drink.strDrinkThumb, strGlass: @drink.strGlass, strIBA: @drink.strIBA, strIngredient1: @drink.strIngredient1, strIngredient10: @drink.strIngredient10, strIngredient11: @drink.strIngredient11, strIngredient12: @drink.strIngredient12, strIngredient2: @drink.strIngredient2, strIngredient3: @drink.strIngredient3, strIngredient4: @drink.strIngredient4, strIngredient5: @drink.strIngredient5, strIngredient6: @drink.strIngredient6, strIngredient7: @drink.strIngredient7, strIngredient8: @drink.strIngredient8, strIngredient9: @drink.strIngredient9, strInstructions: @drink.strInstructions, strMeasure1: @drink.strMeasure1, strMeasure10: @drink.strMeasure10, strMeasure11: @drink.strMeasure11, strMeasure12: @drink.strMeasure12, strMeasure2: @drink.strMeasure2, strMeasure3: @drink.strMeasure3, strMeasure4: @drink.strMeasure4, strMeasure5: @drink.strMeasure5, strMeasure6: @drink.strMeasure6, strMeasure7: @drink.strMeasure7, strMeasure8: @drink.strMeasure8, strMeasure9: @drink.strMeasure9 } }, as: :json
    end

    assert_response 201
  end

  test "should show drink" do
    get drink_url(@drink), as: :json
    assert_response :success
  end

  test "should update drink" do
    patch drink_url(@drink), params: { drink: { strCategory: @drink.strCategory, strDrink: @drink.strDrink, strDrinkThumb: @drink.strDrinkThumb, strGlass: @drink.strGlass, strIBA: @drink.strIBA, strIngredient1: @drink.strIngredient1, strIngredient10: @drink.strIngredient10, strIngredient11: @drink.strIngredient11, strIngredient12: @drink.strIngredient12, strIngredient2: @drink.strIngredient2, strIngredient3: @drink.strIngredient3, strIngredient4: @drink.strIngredient4, strIngredient5: @drink.strIngredient5, strIngredient6: @drink.strIngredient6, strIngredient7: @drink.strIngredient7, strIngredient8: @drink.strIngredient8, strIngredient9: @drink.strIngredient9, strInstructions: @drink.strInstructions, strMeasure1: @drink.strMeasure1, strMeasure10: @drink.strMeasure10, strMeasure11: @drink.strMeasure11, strMeasure12: @drink.strMeasure12, strMeasure2: @drink.strMeasure2, strMeasure3: @drink.strMeasure3, strMeasure4: @drink.strMeasure4, strMeasure5: @drink.strMeasure5, strMeasure6: @drink.strMeasure6, strMeasure7: @drink.strMeasure7, strMeasure8: @drink.strMeasure8, strMeasure9: @drink.strMeasure9 } }, as: :json
    assert_response 200
  end

  test "should destroy drink" do
    assert_difference('Drink.count', -1) do
      delete drink_url(@drink), as: :json
    end

    assert_response 204
  end
end
