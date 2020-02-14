import {Module} from '@nestjs/common';
import {BlogController} from './blog.controller';
import {BlogService} from './blog.service';
import {MongooseModule} from '@nestjs/mongoose';
import {BlogSchema} from './schemas/BlogScheme';
import {AuthModule} from '../auth/auth.module';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }]),
      AuthModule,
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
