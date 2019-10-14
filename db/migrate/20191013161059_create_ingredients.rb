class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :quantity
      t.integer :recipe_id
      t.integer :item_id

      t.timestamps
    end
  end
end
