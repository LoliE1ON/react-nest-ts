import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {IBlog} from './interfaces/blog.interface';
import {Model} from 'mongoose';
import {CreateBlogDto} from './dto/CreateBlog.dto';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class BlogService {

    constructor(
        @InjectModel('Blog') private readonly blogModel: Model<IBlog>,
        private readonly authService: AuthService,
    ) {}

    // Create new blog
    async create(createBlogDto: CreateBlogDto) {

        createBlogDto.userId = this.authService.currentUserId;
        createBlogDto.createDate = new Date().toString();

        const blog = new this.blogModel(createBlogDto);
        return await blog.save();
    }

    // Get all blogs by current user
    async getAll(): Promise<IBlog[]> {
        return await this.blogModel.find({ userId: this.authService.currentUserId }).exec();
    }

}
