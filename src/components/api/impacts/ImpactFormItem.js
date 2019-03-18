import React from 'react';
import EditImpactForm from './EditImpactForm';
import ConfirmDeleteImpactForm from '../modals/ConfirmDeleteImpactForm';

class ImpactFormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isToggleForEditImpactForm: false
    };
  }

  handleClick = () => {
    console.log('handleclick is called!!');
    this.props.getimpactformsfromdb();
    this.setState({
      isToggle: !this.state.isToggle,
      isToggleForEditImpactForm: !this.state.isToggleForEditImpactForm
    });
  };

  render() {
    return (
      <div key={this.props.index}>
        <h2>{this.props.impactform.name}</h2>
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui relaxed divided list"
        >
          <div className="item">
            <div className="header">Name</div>
            <div className="description">{this.props.impactform.name}</div>
          </div>
          <div className="item">
            <div className="header">Email</div>
            <div className="description">{this.props.impactform.email}</div>
          </div>
          <div className="item">
            <div className="header">Organization</div>
            <div className="description">
              {this.props.impactform.organization}
            </div>
          </div>
          <div className="item">
            <div className="header">Message</div>
            <div className="description">{this.props.impactform.message}</div>
          </div>
        </div>
        <br />
        <div
          style={{ display: this.state.isToggle ? 'none' : 'block' }}
          className="ui horizontal list"
        >
          <div className="item">
            <button className="positive ui button" onClick={this.handleClick}>
              Edit Impact Form
            </button>
          </div>
          <div className="item">
            <ConfirmDeleteImpactForm
              deleteimpactform={this.props.deleteimpactform}
              impactform={this.props.impactform}
            />
          </div>
        </div>
        <div style={{ display: this.state.isToggle ? 'block' : 'none' }}>
          <EditImpactForm
            toggledforedit={this.state.isToggleForEditImpactForm}
            toggleeditcomponent={this.handleClick}
            deleteimpactform={this.props.deleteimpactform}
            editimpactform={this.props.editimpactform}
            impactform={this.props.impactform}
          />
        </div>
      </div>
    );
  }
}

export default ImpactFormItem;
