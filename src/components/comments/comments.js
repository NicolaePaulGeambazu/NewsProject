import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Comment from "./comment"

export const Comments = ({ commentIds, root }) => {

  return (
    <Container >
      {root && (
        <Typography >
          Comments
        </Typography>
      )}
      {commentIds.slice(0, 3).map(
        (id, i) =>
          id && (
            <div key={id} >
              <Comment commentId={id} />
            </div>
          )
      )}
    </Container>
  );
};

export default Comments;
