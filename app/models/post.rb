class Post < ApplicationRecord
  belongs_to :user
  validates :content,:select,:email,:date, presence: true
end
