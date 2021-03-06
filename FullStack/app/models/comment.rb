class Comment < ApplicationRecord
    validates :body, presence: true
    
    belongs_to :album,
        class_name: 'Album',
        primary_key: :id,
        foreign_key: :album_id

    belongs_to :user,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :user_id
end
