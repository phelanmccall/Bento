class User < ApplicationRecord
  attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

  has_many :memberships
  # has_many :teams,
  #   through: :memberships,
  #   source:

  after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials username, password
    user = User.find_by(username: username)
    return nil unless user
		user.password_is?(password) ? user : nil
  end

  def password= password
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64
	end

  def reset_session_token!
		self.session_token = SecureRandom.urlsafe_base64
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

  def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = SecureRandom.urlsafe_base64
		end
	end

end
