## react-image-layout

## Install

``` js
npm install react-image-layout --save
```

![](https://raw.githubusercontent.com/zackargyle/react-image-layout/master/example/images/screenshot.png)

## ImageLayout Props

prop        | type   | default    | notes
----------- | ------ | ---------- | ----------
gutter      | number | 0          | the margin between grid elements
columns     | number | 4          | the number of columns to use in the grid
columnWidth | number | 100        | the fixed width of the columns
items       | Array  | `required` | the list of image objects

Use:
``` js

import ImageLayout from 'react-image-layout';

<ImageLayout items={items} columnWidth={200} columns={5} gutter={8} />

```

## Scripts
script         | description
-------------- | -----------
`npm start`    | run the example on `localhost:3000`
`npm test`     | run the component tests
`npm build`    | build the compiled/minified version
`npm run lint` | run the linter on the `/src` directory

## License
[MIT](http://isekivacenz.mit-license.org/)
