import {Configuration} from '@midwayjs/decorator';
import {join} from 'path';

@Configuration({
  namespace: 'book',
  importConfigs: [join(__dirname, 'config')]
})
export class AutoConfiguration /*implements ILifeCycle*/{
  //
}
