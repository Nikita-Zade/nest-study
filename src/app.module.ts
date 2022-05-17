import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ApiserviceService } from './apiservice/apiservice.service';
import { ApiService } from './api/api.service';
import { NoteController } from './note/note.controller';
import NoteService from './note/note.service';
//import { NoteService } from './note/note.service';

@Module({
  imports: [],
  controllers: [AppController, NoteController],
  providers: [AppService, ApiService, NoteService],
})
export class AppModule {}
