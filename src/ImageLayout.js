import React from 'react';

/*
 * The classic "masonry" style Pinterest grid
 * @prop {number} columns - the number of columns in the grid
 * @prop {number} columnWidth - the fixed width of the columns
 * @prop {number} gutter  - the number of columns in the grid
 * @prop {Array}  items   - the list of items to render
 */
export default class ImageLayout extends React.Component {
  
    constructor(props) {
        super(props);
        this.columnHeights = Array.from({ length: props.columns }, () => 0);
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
     * Determine the top and left positions of the grid item. Update the
     * cached column height.
     * @param {Object} item - the grid item
     * @param {Object} item.height - the grid item's image height
     * @param {Object} item.width - the grid item's image width
     */
    getItemStyle(item) {
        const { columnWidth, gutter } = this.props;
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
                width={this.props.columnWidth}
                style={this.getItemStyle(item)}
                key={index} />
        );
    }

    render() {
        const { items } = this.props;
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
    // The fixed width of the columns in the grid
    columnWidth: React.PropTypes.number,
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
    columnWidth: 100,
    gutter: 0
};
