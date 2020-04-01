import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';
import variables from 'src/styles/variables';
import { customizeConfirmIcons, getTextColor } from 'src/styles/helpers';
import withDirection from 'src/styles/withDirection';

const GlobalStyles = createGlobalStyle`
/********** Add Your Global CSS Here **********/

body {
  -webkit-overflow-scrolling: touch;
  color: ${props => props.theme.TEXT_COLOR};
  .anticon {
  font-size: 16px;
  }
}

html h1,
html h2,
html h3,
html h4,
html h5,
html h6,
html a,
html p,
html li,
input,
textarea,
span,
div,
html,
body,
html a {
  margin-bottom: 0;
  font-family: 'Roboto',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html ul {
  -webkit-padding-start: 0px;
  list-style: none;
  margin-bottom: 0;
}
body, #root, .ant-layout {
height: 100%;
.link {
          cursor: pointer;
          text-decoration: underline;
        }
        .linkColor {
        color: ${props => props.theme.PRIMARY};
        }
        .m-r-10 {
        margin-right: 10px;
        }
        .textColorSecondary {
    color: ${props => props.theme.TEXT_COLOR_SECONDARY};
  }
  .textAlignCenter {
    text-align: center;
  }
  //popover
.ant-popover-content {
.ant-popover-title {
  border-bottom: 1px solid ${variables.BORDER_COLOR};
}
}
}
h1, h2, h3, h4, h5, h6 {
  color: ${props => props.theme.TEXT_COLOR};
}
//notification
.ant-notification-notice {
background-color: ${props => props.theme.COMPONENT_BACKGROUND};
border-radius: ${variables.BORDER_RADIUS};
}
.ant-notification-notice-message, .ant-notification, .ant-notification-notice-closable .anticon-close {
color: ${props => props.theme.TEXT_COLOR}
}

//modal
.ant-modal {
.ant-modal-content {
    background-color: ${props => props.theme.COMPONENT_BACKGROUND};
    border-radius: ${variables.BORDER_RADIUS};
}
.ant-modal-confirm-body .ant-modal-confirm-title, .ant-modal-confirm-content {
color: ${props => props.theme.TEXT_COLOR};
} 
.ant-btn {
&:hover {
border-color: ${variables.PRIMARY};
color: ${variables.PRIMARY};
}
&.ant-btn-primary {
background-color: ${variables.PRIMARY};
border-color: ${variables.PRIMARY};
color: ${getTextColor(variables.PRIMARY)};
}
&.ant-btn-warning {
background-color: ${variables.WARNING};
border-color: ${variables.WARNING};
color: ${getTextColor(variables.WARNING)};
}
&.ant-btn-info {
background-color: ${variables.INFO};
border-color: ${variables.INFO};
color: ${getTextColor(variables.INFO)};

&.ant-btn-pink {
background-color: ${variables.PINK};
border-color: ${variables.PINK};
color: ${getTextColor(variables.PINK)};
}
&.ant-btn-dark {
background-color: ${variables.DARK};
border-color: ${variables.DARK};
color: ${getTextColor(variables.DARK)};
}
&.ant-btn-success {
background-color: ${variables.SUCCESS};
border-color: ${variables.SUCCESS};
color: ${getTextColor(variables.SUCCESS)};
}
&.ant-btn-blue {
background-color: ${variables.BLUE};
border-color: ${variables.BLUE};
color: ${getTextColor(variables.BLUE)};
}
&.ant-btn-secondary {
background-color: ${variables.SECONDARY};
border-color: ${variables.SECONDARY};
color: ${getTextColor(variables.SECONDARY)};
}
&.ant-btn-light {
background-color: ${variables.LIGHT};
border-color: ${variables.LIGHT};
color: ${getTextColor(variables.LIGHT)};
}
&.ant-btn-danger {
background-color: ${variables.DANGER};
border-color: ${variables.DANGER};
color: ${getTextColor(variables.DANGER)};
}
}
${customizeConfirmIcons()}
} 
}`;

export default withDirection(GlobalStyles);
