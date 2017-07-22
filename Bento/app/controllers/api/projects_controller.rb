class Api::ProjectsController < ApplicationController
  before_filter: require_logged_in

  def index
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)
  end

  def update
    @project = Project.find(params[:id])

  end

  def destroy
    @project = Project.find(params[:id])

  end

  private

  def project_params
    params.require(:project).permit(:title, :manager)
  end
end
