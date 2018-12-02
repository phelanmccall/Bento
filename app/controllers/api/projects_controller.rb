class Api::ProjectsController < ApplicationController
  before_action :require_logged_in

  def index
    if current_user.teams.pluck(:id).exclude?(project_params[:team_id].to_i)
      redirect_to "/api/teams/0"
    else
      @projects =
        Project
          .where(team_id: project_params[:team_id])
          .order(:index)

      render '/api/projects/index'
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project             =  Project.new(project_params)
    @project.creator_id  =  current_user.id
    @projects            =
      Project
        .where(team_id: project_params[:team_id])
        .order(:index)
    if @projects.length > 1 && @project
      @project.index = @projects.last.index + 1
    end

    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end

  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy

    render 'api/projects/show'
  end

  private

  def project_params
    params.require(:project).permit(
      :creator_id,
      :index,
      :tasks,
      :team_id,
      :title,
    )
  end
end
