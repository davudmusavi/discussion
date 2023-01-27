import TimeAgo from "./timeago";
import Comment_input from "./comment_input";

interface commentProps {
    commentData: any;
}

interface replied {
    reply: boolean;
}

const Comment_item = (props: (commentProps & replied))  => {

   const firstChar = (name : string) => {
        const matches = name.match(/\b(\w)/g);
        return matches;
   } 

  return (
    <>
        <div className='commentItemsInner'>
            {
                props.commentData.user.avatar === undefined ? <div className="nameImage">{firstChar(props.commentData.user.name)}</div> : <img src={props.commentData.user.avatar} alt='' />
            }  
            <div>
                <div className='userName'><span>{props.commentData.user.name}</span><TimeAgo time={props.commentData.date} /></div>
                <p>{props.commentData.text}</p>
                <div className='likeReply'>
                    {   
                        props.commentData.iLikedIt ?  
                        <div className="likeCounter active"><div className="likeIcon likeIconActive"></div> {props.commentData.likes}</div>
                        : 
                        <div className="likeCounter"><div className="likeIcon likeIconUnActive"></div> {props.commentData.likes}</div>
                    }
                    <span>Reply</span>
                </div> 
            </div>
        </div>


         {
            props.reply ? (
                <>
                    {
                        props.commentData.replies.map((item : any) =>
                            <div key={item.id} className='commentItems replied'>
                                <div className='commentItemsInner'>
                                    <img src={item.user.avatar} alt='' />
                                    <div>
                                    <div className='userName'><span>{item.user.name}</span><TimeAgo time={item.date} /></div>
                                    <p>{item.text}</p>
                                        <div className='likeReply'>
                                        {   
                                            item.iLikedIt ?  
                                            <div className="likeCounter active"><div className="likeIcon likeIconActive"></div> {item.likes}</div>
                                            : 
                                            <div className="likeCounter"><div className="likeIcon likeIconUnActive"></div> {item.likes}</div>
                                        }
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <Comment_input replied={true} text="Reply" image='https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg' />
                </>
            ) : null
         }            
      
    </>    
  )
}


export default Comment_item
