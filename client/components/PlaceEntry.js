import React, {Component} from 'react';
import { connect } from 'react-redux';

class PlaceEntry extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.onSaveClick(this.props.place, this.props.user);
  }

  render() {
    return (
      <div className='place-entry animated fadeInUp'>
        <div className='place-info' >
          <a className='place-entry-link'
            href={'https://www.google.com/#q=' + this.props.place.name + ' ' + this.props.place.address}
            target='_blank'>
            <h4>{ this.props.place.name }</h4>
            <p>{ this.props.place.address }</p>
          </a>
        </div>
        <div className='place-entry-favorite'>
          <span onClick={this.handleClick.bind(this)} className='icon-heart' aria-hidden='true'></span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user};
};

export default connect(mapStateToProps)(PlaceEntry);
