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
     * @columnWidth {number} - Optional
     */
    getNumberOfColumns(columnWidth) {
        if(columnWidth) {
            return Math.round(this.props.containerWidth/columnWidth);    
        }
        else {
            //loop columnMinWidth and columnMaxWidth to get the number of columns
            let columns = 0;
            for(var x = this.getNumberOfColumns(this.props.columnMinWidth); x >= this.getNumberOfColumns(this.props.columnMaxWidth); x--) {
               columns = x; 
            }
            console.log(columns)
            return columns;    
        }
    }
  
    /*
     * Get the column width 
     * @columns {number} - Optional
     */
    getColumnWidth(columns) {
        return columns ?  this.props.containerWidth/columns : this.props.containerWidth/this.getNumberOfColumns()
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
        this.columnHeights = Array.from({ length: this.getNumberOfColumns() }, () => 0);
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
    // The max width of columns in the grid
    columnMaxWidth: React.PropTypes.number,
    // The min width of columns in the grid
    columnMinWidth: React.PropTypes.number,
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
    gutter: 0,
    columnMinWidth: 100,
    columnMaxWidth: 400
};

export default Dimensions()(ImageLayout) // Enhanced component