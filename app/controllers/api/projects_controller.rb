class Api::ProjectsController < ApplicationController
  before_action :require_logged_in

  def index
    if current_user.teams.pluck(:id).exclude?(project_params[:team_id].to_i)
      redirect_to "/api/teams/0"
    else
      @projects =
        Project
          .where(team_id: project_params[:team_id])
          .reorder(:index)

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
    assign_indices(@project.team_id)
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

  def assign_indices(team_id)
    current_order =
      Team.find(team_id).projects.reorder(index: :asc).pluck(:id)
    proj_idx      =  @project.index
    new_idx       =  project_params[:index].to_i
    projects_without_current_project =
      current_order[0...proj_idx] + current_order[(proj_idx + 1)..-1]
    new_order =
      projects_without_current_project[0...new_idx] +
        [@project.id] +
        projects_without_current_project[new_idx..-1]

    new_order.each_with_index do |proj_id, idx|
      Project.find(proj_id).update(index: idx)
    end
  end

  def project_params
    params.require(:project).permit(
      :id,
      :creator_id,
      :index,
      :tasks,
      :team_id,
      :title,
    )
  end
end
