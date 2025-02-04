/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./packages/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:packages\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./packages/screens",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:packages\\/screens(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

const getStories = () => {
  return {
    "./packages/components/buttons/Button.stories.tsx": require("../packages/components/buttons/Button.stories.tsx"),
    "./packages/components/controls/Controls.stories.tsx": require("../packages/components/controls/Controls.stories.tsx"),
    "./packages/components/dropdowns/Dropdown.stories.tsx": require("../packages/components/dropdowns/Dropdown.stories.tsx"),
    "./packages/components/inputs/Input.stories.tsx": require("../packages/components/inputs/Input.stories.tsx"),
    "./packages/screens/chat/Home/components/HomeComponents.stories.tsx": require("../packages/screens/chat/Home/components/HomeComponents.stories.tsx"),
    "./packages/screens/chat/Home/Home.stories.tsx": require("../packages/screens/chat/Home/Home.stories.tsx"),
  };
};

configure(getStories, module, false);
