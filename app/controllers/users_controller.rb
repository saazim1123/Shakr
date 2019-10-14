class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  # skip_before_action :authorized, only: [:create]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1

  def signin
   # byebug
    user = User.find_by(username:params[:username])

    if user && user.authenticate(params[:password])
      render json: user
    else 
      render json: { error: 'Username or password incorrect '}, status: 401
    end
  
  end
  
  
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  # POST /users
  def create
    # byebug
    @user = User.new(user_params)

    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: @user.username, jwt: @token}, status: :created
    else
      render json: { error: 'failed to create user'}, status: :not_acceptable
    end
  end

  

  

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
