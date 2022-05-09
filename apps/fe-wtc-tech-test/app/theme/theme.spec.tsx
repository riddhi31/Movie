import { customTheme } from './theme';

describe('cutome theme object ', () => {
  it('should render theme styles', () => {
    expect(customTheme).toMatchInlineSnapshot(`
      Object {
        "cards": Object {
          "green": "#049452",
          "orange": "#ED6606",
          "white": "#FFFFFF",
          "yellow": "#EEC907",
        },
        "palette": Object {
          "primary": Object {
            "main": "#455A64",
          },
        },
        "typography": Object {
          "fontFamily": "Roboto",
        },
      }
    `);
  });
});
