import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Meta } from '../meta/meta';
import { getComment } from '../service/api';
import { createMarkup } from '../utils/utils';
import Comments from './comments';

export const Comment = ({ commentId }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    getComment(commentId).then((data) => data && data.type && setComment(data));
  }, []);

  const { text, kids } = comment;

  return (
    <div >
      {comment && !comment.deleted && (
        <>
          <Meta article={comment} />
          <Typography
            dangerouslySetInnerHTML={createMarkup(text)}
          />
          {kids && <Comments commentIds={kids} />}
        </>
      )}
    </div>
  );
};

export default Comment;
