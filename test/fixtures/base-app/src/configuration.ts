import {Configuration} from '@midwayjs/decorator';
import * as test from '../../../../src';
import {ILifeCycle} from "@midwayjs/core";
import {join} from 'path';

@Configuration({
  imports: [
    test
  ],
  importConfigs: [join(__dirname, 'config')]
})
export class ContainerConfiguration implements ILifeCycle {

  async onReady() {
    // const collector = new WebRouterCollector();
    // console.log(await collector.getFlattenRouterTable());
  }

}
