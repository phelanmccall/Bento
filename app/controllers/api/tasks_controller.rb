class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def index
    @tasks = Task.all.where(project_id: current_project.id)
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(task_params)
    @task.project_id = current_project.id
    if @task.save
      render 'api/tasks/show'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update_attributes(task_params)
      render 'api/tasks/show'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render 'api/tasks/show'
  end

  private

  def task_params
    params.require(:task).permit(:title, :details, :project_id)
  end
end