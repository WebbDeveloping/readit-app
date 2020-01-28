import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Post.css';

const LikesComments = Styled.div`
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-right: 10px;
`;
const Likes = Styled.div`
max-height: 24px;
-ms - flex - align: center;
align - items: center;
display: -ms - flexbox;
display: flex;
-ms - flex - direction: row;
flex - direction: row;
margin: 0;
padding: 0 2px;`;
const Comments = Styled.div`
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 32px;
    overflow: hidden;
    padding: 0 8px 0 4px;
    -ms-flex-positive: 1;
    flex-grow: 1;
`;
const UpVote = Styled.button``;
const DownVote = Styled.button``;

export default function Post(props) {
  return (
    <div>
      <article className='post'>
        <div className='sub-info-container row'>
          <div className='sub-img'>.</div>
          <div className='sub-title-and-user'>
            <Link to={`/SubHome/${props.subid}`}>
              <h5 className='subread-text'>r/{props.name}</h5>
            </Link>
            <h5>u/{'userperson'}</h5>
          </div>
        </div>
        <div className='title-container'>
          <h3>{props.title}</h3>
        </div>
        <h5>{props.post_desc}</h5>
        <h5>{props.name}</h5>
        <div className='post-content'>Post</div>
      </article>
      <LikesComments>
        <Likes>
          <button className='voteButton'>
            <span>
              <img
                className='arrowimg'
                src={`https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/15386806181579697368-128.png`}
              />
            </span>
          </button>
          <div className='likeCount'>37.5</div>
          <button className='voteButton'>
            <span>
              <img
                className='arrowimg'
                src={`https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/13073497911579697358-128.png`}
              />
            </span>
          </button>
        </Likes>
        <Comments></Comments>
      </LikesComments>
    </div>
  );
}
