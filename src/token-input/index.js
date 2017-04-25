/* eslint-disable react/no-set-state, react/jsx-no-literals */
import React, {Component, PropTypes} from 'react';
import autobind from 'autobind-decorator';
import classNames from 'classnames';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './styles.css';


class DemoLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccessToken: ``
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.authenticate !== this.state.authenticate || nextState.userAccessToken !== this.state.userAccessToken;
  }

  @autobind
  handleSaveToken(e) {
    e.preventDefault();
    this.props.onLogin(this.state.userAccessToken);
  }

  @autobind
  handleAccessTokenChange(e) {
    return this.setState({userAccessToken: e.target.value});
  }

  render() {
    return (
      <div className={classNames(`ciscospark-demo-login`, styles.demoLogin)}>
        <div className={classNames(styles.header)}>
          <p>{`Spark Widgets require an access token to identify the current user.`}</p>
        </div>
        <div className={classNames(styles.menu)}>
          <Tabs>
            <Tab label={`Manual Access Token`}>
              <div className={classNames(styles.content)}>
                <form className={classNames(`ciscospark-demo-form`, styles.demoForm)}>
                  <div className={classNames(`ciscospark-field-wrapper`, styles.fieldWrapper)}>
                    <input
                      className={classNames(`ciscospark-field-input`, styles.fieldInput)}
                      onChange={this.handleAccessTokenChange}
                      placeholder="Your Access Token"
                      type="text"
                      value={this.state.userAccessToken}
                    />
                    <RaisedButton
                      label={`Save`}
                      onClick={this.handleSaveToken}
                    />
                  </div>
                </form>
                <p>You can get access token from <a href="http://developer.ciscospark.com">{`developer.ciscospark.com`}</a></p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

DemoLogin.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default DemoLogin;
