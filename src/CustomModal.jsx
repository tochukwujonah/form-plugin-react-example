import * as React from "react";

export class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    // alert("Testing");
    this.state = {
      isOpen: false,
      modalCount: 0,
    };
  }

  componentDidMount() {
    const lastShown = localStorage.getItem("modalLastShown");
    const count = parseInt(localStorage.getItem("modalCount")) || 0;
    const now = new Date().getTime();
    
    

    if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
      localStorage.setItem("modalCount", "0");
      localStorage.setItem("modalLastShown", now.toString());
    }

    if (count < 3) {
      this.setState({ isOpen: true, modalCount: count + 1 });
      localStorage.setItem("modalCount", (count + 1).toString());
    }
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          {/* <h2>Welcome!</h2>
        <p>This modal can only appear 3 times in 24 hours.</p>  */}
          <iframe
                className="frame"
                style={{height: '95%', width: '95%', border: 'none', margin: 'auto', marginBottom: 'auto',}}
                name={"Announcement"}
                title={"Announcement"}
                src={"https://wema-hq-bpms-dt.wemabank.local/Runtime/Runtime/View/MessagePopup/"}
            ></iframe>
          <button className="close-btn" onClick={this.closeModal}>
            X
          </button>
        </div>
        <style>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 60%;
            height: 72%;
            text-align: center;
            position: relative;
          }
          .close-btn {
            margin-top: 10px;
            background: red;
            color: white;
            padding: 8px 16px;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            position: absolute;
            right: 5%;
          }
        .close-btn :hover{
            opacity: 0.5
            }
        `}</style>
      </div>
    );
  }
}
