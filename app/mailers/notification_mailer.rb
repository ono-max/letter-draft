class NotificationMailer < ActionMailer::Base
  default from: "onoto1998@gmail.com"

  def send_confirm_to_user(post)
    @post = post
    mail(
      subject: "手紙を承りました！",
      to: @post.user.email
    )
  end
end
