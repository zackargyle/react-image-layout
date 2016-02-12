import React from 'react';
import ReactDOM from 'react-dom';
import ImageLayout from '../../src/ImageLayout';
import { defaultProps, skinnyProps, fatProps } from '../../test/fixture';

ReactDOM.render(
    <ImageLayout { ...defaultProps } />,
    document.getElementById('app')
);
