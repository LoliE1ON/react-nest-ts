import {Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {JwtAuthGuard} from '../common/guards/jwtAuth.guard';

import {BlogService} from './blog.service';
import {CreateBlogDto} from './dto/CreateBlog.dto';
import {IBlog} from './interfaces/blog.interface';

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() createBlogDto: CreateBlogDto) {

        // Create new blog
        const createBlog: IBlog = await this.blogService.create(createBlogDto);
        if (createBlog) {
            return {
                blog: createBlog,
            };
        }

    }

    @UseGuards(JwtAuthGuard)
    @Get('all')
    async all() {

        const allBlogs: IBlog[] = await this.blogService.getAll();
        if (allBlogs) {
            return {
                blogs: allBlogs,
            };
        }

    }

}
