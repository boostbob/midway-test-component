import {close, createApp, createHttpRequest} from '@midwayjs/mock';
import {IMidwayApplication} from "@midwayjs/core";

describe('/test/feature.foo.ts', () => {

  describe('test new features', () => {

    let app: IMidwayApplication;

    beforeAll(async () => {
      app = await createApp('base-app', {}, '@midwayjs/koa');
    });

    afterAll(async () => {
      await close(app);
    });

    it('should register test controller', async () => {
      const result = await createHttpRequest(app)
        .get('/test/book');
      expect(result.status).toBe(200);
      console.log(result.text);
    });

    it('should be megre local controller', async () => {
      const result = await createHttpRequest(app)
        .get('/foo/bar');
      expect(result.status).toBe(200);
      console.log(result.text);
    });

  });

});
