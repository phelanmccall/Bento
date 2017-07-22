class Api::ProjectsController < ApplicationController
  before_filter: require_logged_in

  def index
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)
    @project.manager_id = current_user.id
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
    params.require(:project).permit(:title, :manager)
  end
end
