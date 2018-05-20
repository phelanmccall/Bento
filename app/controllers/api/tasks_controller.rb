class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def index
    @tasks = Task
      .where(team_id: task_params[:team_id])
      .order(:index)
      
    render '/api/tasks/index'
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(task_params)

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
    params.require(:task).permit(
      :id,
      :title,
      :index,
      :project_id,
      :team_id,
      :checked,
      :details
    )
  end
end
