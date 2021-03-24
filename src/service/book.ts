import {Provide} from '@midwayjs/decorator';

@Provide()
export class BookSerivce {

  async getBookById() {
    return 'nodejs book'
  }

}
