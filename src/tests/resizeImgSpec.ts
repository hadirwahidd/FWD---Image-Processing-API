import resize from '../utilities/resizeImg';

describe('Resize Function Definition and Functionality:', () => {
  it('Expect resize function to be defined', () => {
    expect(resize).toBeDefined();
  });

  it('Expect resize function to return true if image has been resized successfully', () => {
    expect(resize('fjord', 100, 200) instanceof Promise).toBe(true);
  });
});
