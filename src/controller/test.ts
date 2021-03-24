import {Controller, Get, Inject, Provide} from '@midwayjs/decorator';
import {BookSerivce} from '../service/book';

@Provide()
@Controller('/test')
export class TestController {

  @Inject()
  bookService: BookSerivce;

  @Get("/book")
  async book() {
    return this.bookService.getBookById();
  }

}
