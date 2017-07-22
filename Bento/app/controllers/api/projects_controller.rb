class Api::ProjectsController < ApplicationController

  def index
  end

  def show
    @project = Project.find(params[:id])
  end

  def create

  end

  def update
    @project = Project.find(params[:id])

  end

  def destroy
    @project = Project.find(params[:id])

  end

end
