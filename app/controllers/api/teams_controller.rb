class Api::TeamsController < ApplicationController
  def index
    @teams = Team.all

    render 'api/teams/index'
  end

  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      render 'api/teams/show'
    else
      render @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = Team.find(params[:id])

    if @team.update_attributes(team_params)
      render 'api/teams/show'
    else
      render @team.errors.full_messages, status: 422
    end
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    render 'api/teams/show'
  end

  private

  def team_params
    params.require(:team).permit(:team_name, :owner_id)
  end
end
