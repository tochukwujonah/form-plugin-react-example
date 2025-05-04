// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import reactToWebComponent from "react-to-webcomponent";

// class CustomModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//       modalCount: 0,
//     };
//   }

//   componentDidMount() {
//     const lastShown = localStorage.getItem("modalLastShown");
//     const count = parseInt(localStorage.getItem("modalCount")) || 0;
//     const now = new Date().getTime();

//     if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
//       localStorage.setItem("modalCount", "0");
//       localStorage.setItem("modalLastShown", now.toString());
//     }

//     if (count < 3) {
//       this.setState({ isOpen: true, modalCount: count + 1 });
//       localStorage.setItem("modalCount", (count + 1).toString());
//     }
//   }

//   closeModal = () => {
//     this.setState({ isOpen: false });
//   };

//   render() {
//     const { isOpen } = this.state;
//     return (
//       isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-5 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold">Welcome!</h2>
//             <p>This modal can only appear 3 times in 24 hours.</p>
//             <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={this.closeModal}>Close</button>
//           </div>
//         </div>
//       )
//     );
//   }
// }

// class ModalWrapper extends reactToWebComponent(CustomModal, React, ReactDOM, {
//   shadow: "open",
// }) {
//   static getMetaConfig = () =>
//     Promise.resolve({
//       controlName: "nintex-react-modal",
//       fallbackDisableSubmit: false,
//       description: "Custom Modal component for Nintex K2 forms",
//       iconUrl: "modal-icon",
//       groupName: "Visual",
//       version: "1.0",
//       properties: {},
//       standardProperties: {
//         readOnly: true,
//         required: true,
//         description: true,
//       },
//     });
// }

// customElements.define("nintex-react-modal", ModalWrapper);


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import { CustomModal } from "./CustomModal";

class ModalWrapper extends reactToWebComponent(CustomModal, React, ReactDOM, {
  shadow: "open",
  props: ["name", "title", "src", "height"],
}) {
  static getMetaConfig = () =>
    Promise.resolve({
      controlName: "react-modal",
      fallbackDisableSubmit: false,
      description: "Custom Modal component for Nintex K2 forms",
      iconUrl: "modal-icon",
      groupName: "Visual",
      version: "1.3",
      properties: {
        src: {
          type: "string",
          title: "Source URL",
          description:
            "URL of the iframe, please note many sites block been rendered in iframes",
        },
        height: {
          type: "string",
          title: "Height",
          description: "Height of the component",
        },
      },
      standardProperties: {
        readOnly: true,
        required: true,
        description: true,
      },
    });
}

customElements.define("nintex-react-modal", ModalWrapper);

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import reactToWebComponent from "react-to-webcomponent";
// import { CustomModal } from "./CustomModal";

// const ModalWrapper = () => {
//   alert("Okay it")
//   return (<CustomModal />);
// };

// // Define the custom web component
// customElements.define(
//   "nintex-react-modal",
//   reactToWebComponent(ModalWrapper, React, ReactDOM)
// );

// export default ModalWrapper;
