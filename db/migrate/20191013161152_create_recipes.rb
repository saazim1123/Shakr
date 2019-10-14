class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :category
      t.string :glass
      t.string :img_url
      t.text :instructions

      t.timestamps
    end
  end
end
