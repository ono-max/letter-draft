class Post < ApplicationRecord
  belongs_to :user
  validates :content,:select,:email, presence: true, unless: :image?
end
