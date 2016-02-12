const chai = require('chai');
const sinon = require('sinon');
const enzyme = require('enzyme');
const chaiEnzyme = require('chai-enzyme');
const React = require('react');

chai.use(chaiEnzyme());

global.sinon = sinon;
global.React = React;
global.enzyme = enzyme;
global.expect = chai.expect;
