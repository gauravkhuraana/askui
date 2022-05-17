import { AskuiClient } from '@vqa4gui/askui';

describe('jest with askui', () => {
  // Client is necessary to use the askui API
  let aui: AskuiClient;

  it('should click on text', async () => {
    await aui
      .click()
      .text()
      .exec();
  });
});
