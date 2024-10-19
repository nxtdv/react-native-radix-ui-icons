## Introduction

This package provides [Radix UI](https://www.radix-ui.com/icons) icons for React Native. These icons are designed to be easily customizable in terms of size & color.

## Installation
To install the package, run:
```bash
npm install react-native-radix-ui-icons
```
or using Yarn:
```bash
yarn add react-native-radix-ui-icons
```

## Usage
To use an icon in your project, simply import it and customize its properties:
```tsx
import React from 'react';
import { ShadowIcon } from 'react-native-radix-ui-icons';

const App = () => {
  return (
    <ShadowIcon color="blue" width={30} height={30} />
  );
};

export default App;
```

### Customization
All icons support the following properties:
- `color`: Set the color of the icon (default: `black`).
- `width` and `height`: Adjust the size of the icon (default: `24x24`).
```tsx
<ShadowIcon color="red" width={40} height={40} />
```

## Contributing
We welcome contributions! If you'd like to contribute:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Copyright © 2022-present [WorkOS](https://workos.com/).
See [LICENSE](https://github.com/radix-ui/icons/blob/master/LICENSE) for more information.