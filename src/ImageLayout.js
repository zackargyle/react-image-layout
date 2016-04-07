import React from 'react';
import Dimensions from 'react-dimensions'

/*
 * The classic "masonry" style Pinterest grid
 * @prop {number} columns - the number of columns in the grid
 * @prop {number} gutter  - the number of columns in the grid
 * @prop {Array}  items   - the list of items to render
 */
class ImageLayout extends React.Component {
    
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }
    
    /*
     * Get the shortest column in the list of columns heights
     */
    getShortestColumn() {
        const minValue = Math.min(...this.columnHeights);
        return this.columnHeights.indexOf(minValue);
    }
  
    /*
     * Get the column width 
     */
    getColumnWidth() {
        return this.props.containerWidth/this.props.columns;
    }
    
    /*
     * Determine the top and left positions of the grid item. Update the
     * cached column height.
     * @param {Object} item - the grid item
     * @param {Object} item.height - the grid item's image height
     * @param {Object} item.width - the grid item's image width
     */
    getItemStyle(item) {
        const gutter  = this.props.gutter;
        const columnWidth = this.getColumnWidth();
        const shortestColumnIndex = this.getShortestColumn();
        const left = ( columnWidth + gutter ) * shortestColumnIndex;
        const top = this.columnHeights[shortestColumnIndex];
        const normalizedHeight = (columnWidth / item.width) * item.height;
        this.columnHeights[shortestColumnIndex] += normalizedHeight + gutter;
        return {
            left: `${left}px`,
            top: `${top}px`,
            position: `absolute`
        };
    }

    /*
     * Render helper for an individual grid item
     * @param {Object} item - the grid item to render
     * @param {Object} item.url - the image src url
     */
    renderItem(item, index) {
        return (
            <img className="ImageLayout__item"
                src={item.url}
                width={this.getColumnWidth()}
                style={this.getItemStyle(item)}
                key={index} />
        );
    }
    
    render() {
        this.columnHeights = Array.from({ length: this.props.columns }, () => 0);
        const { items } = this.props;
        console.log('render');
        return (
            <div className="ImageLayout" style={{position: 'relative'}}>
                { items.map(this.renderItem) }
            </div>
        )
    }
}

ImageLayout.propTypes = {
    // The number of columns in the grid
    columns: React.PropTypes.number,
    // The size of the gutter between images
    gutter: React.PropTypes.number,
    // The list of images to render
    items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            height: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired,
            width: React.PropTypes.number.isRequired
        })
    ).isRequired
};

ImageLayout.defaultProps = {
    columns: 4,
    gutter: 0
};

export default Dimensions()(ImageLayout) // Enhanced component