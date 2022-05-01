import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose'

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {

    }

    async create(doc: User) {
        const result = await new this.userModel(doc).save();
        return result.id;
    }

    async findAll() {
        return await this.userModel.find().exec();
    }

    async findOne(id:string) {
        return await this.userModel.findById(id).exec();
    }

    async update(id:string, doc:User) {
        return await this.userModel.findByIdAndUpdate(id, doc);
    }

    async remove(id:string) {
        return await this.userModel.findByIdAndDelete(id)
    }
    



}
