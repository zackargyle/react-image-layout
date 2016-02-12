const { shallow } = require('enzyme');

const ImageLayout = require('../src/ImageLayout').default;
const fixture = require('./fixture');
const defaultProps = fixture.defaultProps;

describe('ImageLayout - Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ImageLayout {...defaultProps} />);
    });

    it('should have the `ImageLayout` classname', () => {
        expect(wrapper.hasClass('ImageLayout')).to.be.true;
    });

    it('should set the container to be relative', () => {
        expect(wrapper.props().style.position).to.equal('relative');
    });

    it('should render an <img> for each item', () => {
        expect(wrapper.find('.ImageLayout__item')).to.have.length(defaultProps.items.length);
    });

});

describe('ImageLayout.getShortestColumn', () => {
    let instance;

    beforeEach(() => {
        instance = shallow(<ImageLayout {...defaultProps} />).instance();
    });

    it('should get the correct shortest column from start', () => {
        instance.columnHeights = [0, 0, 0, 0];
        expect(instance.getShortestColumn()).to.equal(0);
    });

    it('should get the correct shortest column from end', () => {
        instance.columnHeights = [200, 250, 200, 100];
        expect(instance.getShortestColumn()).to.equal(3);
    });

    it('should get the correct shortest column from mid', () => {
        instance.columnHeights = [100, 100, 50, 100];
        expect(instance.getShortestColumn()).to.equal(2);
    });
})

describe('ImageLayout.getItemStyle', () => {
    let instance, style;

    function render(item) {
        instance = shallow(<ImageLayout items={[]} />).instance();
        instance.columnHeights = [100, 200, 50, 300];
        style = instance.getItemStyle(item);
    }

    it('should set the correct style for an item', () => {
        render({ url: '', height: 400, width: 100 });
        expect(style.left).to.equal('200px');
        expect(style.top).to.equal('50px');
        expect(style.position).to.equal('absolute');
    });

    it('should add the height to the columnHeights', () => {
        render({ url: '', height: 400, width: 100 });
        expect(instance.columnHeights[2]).to.equal(50 + 400);
    });

    it('should normalize the height in columnHeights', () => {
        render({ url: '', height: 400, width: 200 }); // width is 2x default
        expect(instance.columnHeights[2]).to.equal(50 + 400 / 2);
    });
});

