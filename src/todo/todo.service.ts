/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(createTodo: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodo);
    return await this.todoRepository.save(todo);
  }

  async findAll(): Promise<Todo[]> {
    const todos = await this.todoRepository.find();

    return todos ?? [];
  }

  async updateTodo(id: number, updateTodo: UpdateTodoDto) {
    const todo = await this.todoRepository.findOneBy({ id });
    Object.assign(todo, updateTodo);
    return this.todoRepository.save(todo);
  }

  async deleteTodo(id: number) {
    await this.todoRepository.delete(id);
    return { message: `Todo with id ${id} deleted successfully` };
  }
}
