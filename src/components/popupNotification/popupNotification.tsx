import React, {Component} from "react";
import Modal from "react-responsive-modal";
import "./styles.scss";
import {IEmpty} from "../../common/IEmpty";
import {EventNames, eventRegister} from "../../common/eventRegister";

interface IState extends INotificationPopupData {
  isOpen: boolean;
}

export interface INotificationPopupData {
  title: string;
  subtitle: string;
}

export class NotificationPopup extends Component<IEmpty, IState> {
  protected listenerId: string;

  constructor(props: IEmpty) {
    super(props);
    this.state = {
      isOpen: false,
      subtitle: "",
      title: "",
    };
    this.listenerId = "";
  }

  componentDidMount() {
    this.listenerId = eventRegister.addEventListener(EventNames.notification, (data: INotificationPopupData) => {
      this.setState({...data, isOpen: true});
    });
  }

  componentWillUnmount() {
    eventRegister.removeEventListener(this.listenerId);
  }

  render() {
    const {title, subtitle} = this.state;
    if (!this.state.isOpen) {
      return null;
    }

    return (
      <Modal
        animationDuration={150}
        showCloseIcon={false}
        open={this.state.isOpen}
        onClose={this.onClose}
        center={true}
      >
        <div className={"popup"}>
          <div className={"popup__title"}>{title}</div>
          <div className={"popup__subtitle"}>{subtitle}</div>
          <div className={"popup__buttons"}>
            <button onClick={this.onClose}>{"ОК"}</button>
          </div>
        </div>
      </Modal>
    );
  }

  private onClose = () => {
    this.setState({isOpen: false});
  };
}
