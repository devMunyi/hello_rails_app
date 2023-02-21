class Api::MessagesController < Api::ApplicationController
  def index
    message = Message.order('RANDOM()').first
    render json: message, status: :ok
  end
end
