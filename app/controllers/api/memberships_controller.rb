class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(user_id: current_user.id, team_id: params[:membership][:team_id])

    if @membership.save
      render 'api/memberships/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:team_id, :user_id)
  end
end
