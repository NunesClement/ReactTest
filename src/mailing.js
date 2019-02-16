import React from "react";
import ReactDOM from "react-dom";

function MailsList(props) {
  return (
    <ul>
      {props.list.map((name, index) => (
        <li key={index}>
          <span>{name}</span>
          <div className="text-center">
            <button
              className="btn btn-danger text-center"
              onClick={() => props.onRemoveMail(name)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
class MyAPP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mails: ["test@test.fr", "test2@test.fr", "test3@test.fr"],
      input: ""
    };
    this.handleRemoveMail = this.handleRemoveMail.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleAddMail = this.handleAddMail.bind(this);
  }
  handleAddMail() {
    this.setState(currentState => {
      return {
        mails: currentState.mails.concat([this.state.input])
      };
    });
  }
  handleRemoveMail(name) {
    this.setState(currentState => {
      return {
        mails: currentState.mails.filter(mail => mail !== name)
      };
    });
  }
  updateInput(e) {
    const value = e.target.value;

    this.setState({
      input: value
    });
  }
  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="new mail"
          value={this.state.input}
          onChange={this.updateInput}
        />
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.handleAddMail}>
            <b>Envoyer</b>
          </button>
        </div>
        <br />
        <MailsList
          list={this.state.mails}
          onRemoveMail={this.handleRemoveMail}
        />
      </div>
    );
  }
}
export default MyAPP;
