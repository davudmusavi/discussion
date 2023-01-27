interface inputProps {
    replied: boolean;
    text: string;
    image: string;
}

const Comment_input = (props: inputProps)  => {

  return (
    <div className={props.replied ? "commentWrap activeReply" : "commentWrap"}>
        <div className='commentInput'>
        <img src={props.image} alt='' />
        <input type="text" placeholder={props.text} />
        </div>
    </div>
  )
}

export default Comment_input