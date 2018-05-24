class MessagesController < ApplicationController

  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    @message.save
    if @message.save
      redirect_to group_messages_path(@group), notice: 'メッセージが送信されませんでした'
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end


  def set_group
    @group = Group.find(params[:group_id])
  end

end
