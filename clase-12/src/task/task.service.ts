import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schema/task.schema';
import { Model } from 'mongoose';
import { User } from 'src/user/schema/user.schema';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const newTask = {
      description: createTaskDto.description,
    };

    const user = await this.userModel.findById(createTaskDto.userId);
    if (!user) throw new NotFoundException('User not found');
    const task = await this.taskModel.create(newTask);

    await this.userModel.findByIdAndUpdate(createTaskDto.userId, {
      $push: { task: task._id },
    });

    return task;
  }

  async findAll() {
    return `This action returns all task`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
