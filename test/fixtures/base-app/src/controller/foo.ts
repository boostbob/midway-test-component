import {Controller, Get, Init, Provide} from "@midwayjs/decorator";

@Provide()
@Controller('/foo')
export class FooController {

  @Init()
  init() {
    console.log('foo controller init');
  }

  @Get('/bar')
  async bar() {
    return 'foo bar';
  }

}
