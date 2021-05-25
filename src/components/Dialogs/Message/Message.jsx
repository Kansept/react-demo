import s from "./../Dialogs.module.css";

const Message = (props) => {
  let styleType = props.type === 'from' 
    ? s.from
    : s.to;
  return <div className={`${s.message} ${styleType}`}>{props.message}</div>;
};

export default Message;
