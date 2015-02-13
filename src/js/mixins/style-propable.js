var React = require('react/addons');

module.exports = {

  mergePropStyles: function(styles, props) {
    return React.addons.update(styles, {
      $merge: props || this.props.style || {}
    });
  }
  
}