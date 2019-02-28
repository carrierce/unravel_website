import React from 'react';
import ImpactFormItem from './ImpactFormItem';
import CreateImpactForm from './CreateImpactForm';

class ImpactForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      impactforms: this.props.impactforms
    };
  }

  componentWillMount() {
    this.setState({
      impactforms: this.props.impactforms
    });
  }

  componentWillReceiveProps() {
    this.setState({
      impactforms: this.props.impactforms
    });
  }

  deleteImpactForm = index => {
    this.props.deleteimpactform(index);
  };

  render() {
    const renderedList = this.props.impactforms
      .slice(0)
      .reverse()
      .map((impactform, index) => {
        return (
          <div key={index} className="ui segment">
            <ImpactFormItem
              className="ui items"
              editimpactform={this.props.editimpactform}
              impactform={impactform}
              index={index}
              deleteimpactform={this.deleteImpactForm}
              getimpactformsfromdb={this.props.getimpactformsfromdb}
            />
          </div>
        );
      });
    return (
      <div>
        <CreateImpactForm postimpactform={this.props.postimpactform} />
        <div>{renderedList}</div>
      </div>
    );
  }
}

export default ImpactForms;
