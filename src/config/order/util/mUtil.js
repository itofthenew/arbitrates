import {Message} from 'element-ui';


export const showMessage = (showMessageDetial, showMessageType) => {
  Message.success({
    message: showMessageDetial,
    type: showMessageType
  });
}
