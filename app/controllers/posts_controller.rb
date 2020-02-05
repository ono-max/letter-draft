class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @created_post = Post.create(post_params)
    NotificationMailer.send_confirm_to_user(@created_post).deliver
  end

  def show
    @post = Post.find(params[:id])
  end

  private
  def post_params
    params.require(:post).permit(:name, :content, :image, :email, :date, :select).merge(user_id: current_user.id)
  end

end
