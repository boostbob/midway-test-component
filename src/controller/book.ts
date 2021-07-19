import {Controller, Get, Inject, Provide} from '@midwayjs/decorator';
import {BookSerivce} from '../service/book';

@Provide()
@Controller('/books')
export class BookController {

  @Inject()
  bookService: BookSerivce;

  @Get("/1")
  async book() {
    return this.bookService.getBookById();
  }

}
